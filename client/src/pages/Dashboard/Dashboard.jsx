import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { FaCog, FaTimesCircle, FaSave } from "react-icons/fa";
import "./dashboard.css";

const usersData = [
  {
    id: 1,
    name: "Michael Holz",
    dateCreated: "04/10/2013",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Paula Wilson",
    dateCreated: "05/08/2014",
    role: "Publisher",
    status: "Active",
  },
  {
    id: 3,
    name: "Antonio Moreno",
    dateCreated: "11/05/2015",
    role: "Publisher",
    status: "Suspended",
  },
  {
    id: 4,
    name: "Mary Saveley",
    dateCreated: "06/09/2016",
    role: "Reviewer",
    status: "Active",
  },
  {
    id: 5,
    name: "Martin Sommer",
    dateCreated: "12/08/2017",
    role: "Moderator",
    status: "Inactive",
  },
];

function Dashboard() {
  const [users, setUsers] = useState(usersData);
  const [editData, setEditData] = useState({
    name: "",
    dateCreated: "",
    role: "",
    status: "",
  });
  const [userId, setUserId] = useState(null);

  function handleDelete(id) {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  function handleEdit(id, index) {
    const singleData = users[index];
    setEditData(singleData);
    setUserId(id);
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSave(id) {
    const updatedData = users.map((user) =>
      user.id === id ? { ...user, ...editData } : user
    );
    setUsers(updatedData);
    setUserId(null);
  }

  return (
    <Table bordered hover responsive className="mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date Created</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <React.Fragment key={user.id}>
            {userId !== user.id ? (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.dateCreated}</td>
                <td>{user.role}</td>
                <td>
                  <span
                    className={`dot ${
                      user.status.toLowerCase() === "active"
                        ? "bg-success"
                        : user.status.toLowerCase() === "inactive"
                        ? "bg-warning"
                        : "bg-danger"
                    }`}
                  ></span>
                  {user.status}
                </td>
                <td>
                  <FaCog
                    className="text-primary me-3"
                    onClick={() => handleEdit(user.id, index)}
                    style={{ cursor: "pointer" }}
                  />
                  <FaTimesCircle
                    onClick={() => handleDelete(user.id)}
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ) : (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={editData.name}
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="dateCreated"
                    value={editData.dateCreated}
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="role"
                    value={editData.role}
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="status"
                    value={editData.status}
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <FaSave
                    className="text-primary me-3"
                    onClick={() => handleSave(user.id)}
                    style={{ cursor: "pointer" }}
                  />
                  <FaTimesCircle
                    onClick={() => setUserId(null)}
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
}

export default Dashboard;
