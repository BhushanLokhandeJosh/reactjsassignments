import { useState, useEffect } from "react";

const Form = ({ activity, setActivity, editToDo, setEditedToDo }) => {
  const [input, setInput] = useState(""); //for input todo..

  useEffect(() => {
    if (editToDo) {
      setInput(editToDo.title);
    } else {
      setInput("");
    }
  }, [setInput, editToDo]);

  const updateTodo = (title, id, status) => {
    const newTodo = activity.map((activity) =>
      activity.id === id ? { id, title, status } : activity
    );
    console.log(newTodo);
    setActivity(newTodo);
    setEditedToDo("");
  };

  const onInputChange = (event) => {
    console.log(event);
    setInput(event.target.value);
  };

  const onFormSubmit = () => {
    if (!editToDo) {
      setActivity([
        ...activity,
        {
          id: activity.length + 1,
          title: input,
          status: "Pending",
        },
      ]);
      setInput("");
    } else {
      updateTodo(input, editToDo.id, editToDo.status);
    }
  };
  return (
    <div>
      <h1 style={{ marginTop: "40px" }}>To Do App</h1>

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
        {editToDo ? "EDIT" : "ADD"}
      </button>
    </div>
  );
};

export default Form;
