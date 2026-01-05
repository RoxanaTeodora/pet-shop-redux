// import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

function CreateUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users || []);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({ id: newId, name: name, email: email }));
    navigate("/userHome");
  };

  return (
    <div>
      <main className="table-user">
        <form onSubmit={handleSubmit} className="table-user">
          <h2 className="admin-title">Add new users</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-user-input"
              placeholder="enter name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-user-input"
              placeholder="enter email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="user-create-btn">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default CreateUsers;
