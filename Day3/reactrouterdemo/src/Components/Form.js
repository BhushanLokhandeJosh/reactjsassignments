import { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

import useFetch from "./useFetch";

import { TODOURL } from "../Constants/todoUrl";

const Form = ({ activity, setActivity }) => {
  const [input, setInput] = useState(""); //for input todo..
  const navigate = useNavigate();

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (e) => {
    const data = {
      id: [activity.length - 1].id + 1,
      title: input,
      status: "Pending",
    };

    fetch("http://localhost:8000/todo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });

    setInput("");
    navigate("/");
  };
  return (
    <div className="create-box">
      <h3 style={{ marginTop: "40px" }}>Add Blog Title</h3>

      <input
        type="text"
        placeholder="Enter todo"
        className="task-input"
        value={input}
        size="40%"
        required
        onChange={onInputChange}
      ></input>
      <button className="button-add" onClick={onFormSubmit}>
        Add Blogs
      </button>
      <br></br>
      <br></br>

      <div>
        <Link to="/">Back To Home Page</Link>
      </div>
    </div>
  );
};

export default Form;
