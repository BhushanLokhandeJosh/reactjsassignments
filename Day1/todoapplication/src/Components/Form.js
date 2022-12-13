import { useEffect } from "react";

const Form = ({
  input,
  setInput,
  activity,
  setActivity,
  editToDo,
  setEditedToDo,
}) => {
  const updateTodo = (title, id, status) => {
    let date = new Date();
    const newTodo = activity.map((activity) =>
      activity.id === id ? { title, id, status, date } : activity
    );
    setActivity(newTodo);
    setEditedToDo("");
  };

  useEffect(() => {
    if (editToDo) {
      setInput(editToDo.title);
    } else {
      setInput("");
    }
  }, [setInput, editToDo]);

  const onInputChange = (event) => {
    console.log(event);
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editToDo) {
      setActivity([
        ...activity,
        {
          id: activity.length + 1,
          title: input,
          status: "Pending",
          Date: new Date(),
        },
      ]);
      setInput("");
    } else {
      updateTodo(input, editToDo.id, editToDo.status);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      ></input>
      <button className="button-add" type="submit">
        {editToDo ? "EDIT" : "ADD"}
      </button>
    </form>
  );
};

export default Form;
