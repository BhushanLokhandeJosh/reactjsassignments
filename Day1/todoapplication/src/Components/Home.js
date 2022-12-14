import { useState, useEffect } from "react";
import ActivityList from "./ActivityList";
import Form from "./Form";

const Home = () => {
  const [input, setInput] = useState(""); //for input todo...
  const [editToDo, setEditedToDo] = useState(null); //for edited todo...
  const [activity, setActivity] = useState([
    {
      id: 1,
      title: "Purchase Book",
      Date: new Date("2022-12-12"),
      status: "Completed",
    },
    {
      id: 2,
      title: "Buy Vegetables",
      Date: new Date("2022-12-13"),
      status: "Pending",
    },
    {
      id: 3,
      title: "Phone call to friend",
      Date: new Date("2022-12-12"),
      status: "Completed",
    },
    {
      id: 4,
      title: "Friends Wedding",
      Date: new Date("2022-12-12"),
      status: "Pending",
    },
  ]); //for all todo list.

  const deleteActivity = (id) => {
    const filteredActivity = activity.filter((item) => item.id !== id);
    setActivity(filteredActivity);
  };

  const changeStatus = (id) => {
    let object = activity.find((item) => item.id === id);
    if (object.status === "Pending") {
      object.status = "Completed";
    } else {
      object.status = "Pending";
    }
    console.log(activity);
    setActivity([...activity]);
  };

  const editTodo = (id) => {
    const findTodo = activity.find((activity) => activity.id === id);
    setEditedToDo(findTodo);
  };

  return (
    <div className="container">
      <div className="activity-list">
        <h1 style={{ marginTop: "40px" }}>To Do App</h1>
        <Form
          input={input}
          setInput={setInput}
          activity={activity}
          setActivity={setActivity}
          editToDo={editToDo}
          setEditedToDo={setEditedToDo}
        />

        <ActivityList
          activity={activity}
          title="Activity List"
          deleteActivity={deleteActivity}
          changeStatus={changeStatus}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

export default Home;
