import { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

const Form = ({ activity, setActivity }) => {
  const [input, setInput] = useState(""); //for input todo..
  const navigate = useNavigate();

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (e) => {
    const data = {
      id: activity.length + 1,
      title: input,
      status: "Pending",
    };

    console.log(data);

    fetch("http://localhost:8000/todo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });

    setInput("");
    navigate("/");
    // } else {
    //   fetch(`http://localhost:8000/todo/${editToDo.id}`, {
    //     method: "PATCH",
    //     body: JSON.stringify(data),
    //     headers: { "content-type": "application/json" },
    //   });
    // }
  };
  return (
    <div>
      <h1 style={{ marginTop: "40px" }}>Add Blog Title</h1>

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
      <div>
        <Link to="/">Back To Home Page</Link>
      </div>
    </div>
  );
};

export default Form;
