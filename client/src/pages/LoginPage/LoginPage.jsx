import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Card } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [error, setError] = useState({});
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://elansol-assessment.onrender.com/api/auth/login",
        data
      );
      const { token, success, user } = response.data;
      console.log(token, success, user);
      if (success) {
        localStorage.setItem("token", token);
        localStorage.setItem("username", user.username);
        setMessage("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 800);
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.message);
        setError({ apiError: err.response.data.message });
      } else {
        setError({ apiError: "Something went wrong. Please try again." });
      }
    }
    reset();
  };

  return (
    <div className="login-container">
      <Link to="/indexPage">
        <FaArrowLeftLong className="left-icon" />
      </Link>
      <Container className=" d-flex justify-content-center align-items-center min-vh-100">
        <Card className="login-card">
          <Card.Body>
            <div className="text-center">
              <Button className="signUp-btn" as={Link} to="/signUp">
                SIGN IN
              </Button>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)} className="form-c">
              <Form.Group className="mb-3">
                <div className="input-icon">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="username"
                    autoComplete="off"
                    {...register("username", {
                      required: "Username is required",
                    })}
                    className="input-field"
                  />
                </div>
                {errors.username && (
                  <span className="text-danger">{errors.username.message}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <div className="input-icon">
                  <div className="icon">
                    <FaLock />
                  </div>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    autoComplete="off"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 4, message: "Minimum length is 4" },
                      maxLength: { value: 8, message: "Maximum length is 8" },
                    })}
                    className="input-field"
                  />
                </div>
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </Form.Group>

              <Form.Group className="d-flex justify-content-between mb-4">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  className="check"
                />
                <a href="#" className="forget-password">
                  Forgot your password?
                </a>
              </Form.Group>
              {error.apiError && (
                <p className="text-danger text-center">{error.apiError}</p>
              )}
              {message && <p className="text-success text-center">{message}</p>}
              <Button
                type="submit"
                variant="primary"
                className="w-100 login-button"
              >
                LOGIN
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default LoginPage;
