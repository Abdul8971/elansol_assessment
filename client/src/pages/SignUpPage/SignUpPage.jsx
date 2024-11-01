import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Card } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BsFillCalendarDateFill } from "react-icons/bs";
import "../LoginPage/login.css";
import { Link } from "react-router-dom";

function SignUpPage() {
  const [error, setError] = useState({});
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://elansol-assessment.onrender.com/api/auth/signup",
        data
      );
      localStorage.setItem("user", JSON.stringify(data));
      // console.log(data);
      setMessage("Signup successful! Please login.");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      setError({});
      reset();
    } catch (error) {
      if (error.response) {
        setError({ apiError: error.response.data.message });
      } else {
        setError({
          apiError: "Something went wrong. Please try again later.",
        });
      }
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <Link to="/indexPage">
        <FaArrowLeftLong className="left-icon" />
      </Link>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="login-card">
          <Card.Body>
            <div className="text-center">
              <Button className="signUp-btn" as={Link} to="/login">
                Login
              </Button>
            </div>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="form-main-container"
            >
              <Form.Group className="mb-3">
                <div className="input-icon">
                  <div className="icon">
                    <FaUser />
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Username"
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

              <Form.Group className="mb-3">
                <div className="input-icon">
                  <div className="icon">
                    <MdEmail />
                  </div>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="input-field"
                  />
                </div>
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </Form.Group>

              <Form.Group className="mb-3">
                <div className="input-icon">
                  <div className="icon">
                    <BsFillCalendarDateFill />
                  </div>
                  <Form.Control
                    type="date"
                    placeholder="Date of Birth"
                    autoComplete="off"
                    {...register("dob", {
                      required: "Date of birth is required",
                    })}
                    className="input-field"
                  />
                </div>
                {errors.dob && (
                  <span className="text-danger">{errors.dob.message}</span>
                )}
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <div className="input-icon">
                  <div className="icon">
                    <FaLock />
                  </div>
                  <Form.Control
                    type="password"
                    placeholder="Password"
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

              {error.apiError && (
                <p className="text-danger text-center">{error.apiError}</p>
              )}
              {message && <p className="text-success text-center">{message}</p>}

              <Button
                type="submit"
                variant="primary"
                className="w-100 login-button"
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default SignUpPage;
