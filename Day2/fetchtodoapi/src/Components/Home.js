import { useEffect, useState } from "react";
import ActivityList from "./ActivityList";
import Form from "./Form";
import Loader from "./Loader";
import useFetch from "./useFetch";
import { TODOURL } from "../constants/todoUrl";

const Home = () => {
  const [editToDo, setEditedToDo] = useState(null); //for edited todo..
  const [activity, setActivity] = useState([]);

  const { activity: todo, pending, error } = useFetch(TODOURL);

  useEffect(() => {
    setActivity(todo);
  }, [todo]);

  const deleteActivity = (id) => {
    const filteredActivity = activity.filter((item) => item.id !== id);
    setActivity(filteredActivity);
  };

  const changeStatus = (id) => {
    const tempArr = [...activity];
    let object = tempArr.find((item) => item.id === id);

    if (object.status === "Pending") {
      object.status = "Completed";
      console.log(object.title);
      <span style={{ textDecoration: "line-through", color: "yellow" }}>
        <blur>{object.title}</blur>
      </span>;
    } else {
      object.status = "Pending";
    }
    setActivity([...tempArr]);
  };

  const editTodo = (id) => {
    const tempArr = [...activity];
    const findTodo = tempArr.find((activity) => activity.id === id);
    setEditedToDo(findTodo);
  };

  return (
    <div className="container">
      <div className="activity-list">
        <div>
          {error ? (
            <div>{error}</div>
          ) : pending ? (
            <Loader></Loader>
          ) : (
            <div>
              {
                <Form
                  activity={activity}
                  setActivity={setActivity}
                  editToDo={editToDo}
                  setEditedToDo={setEditedToDo}
                />
              }

              {
                <ActivityList
                  activity={activity}
                  title="Activity List"
                  deleteActivity={deleteActivity}
                  changeStatus={changeStatus}
                  editTodo={editTodo}
                  setActivity={setActivity}
                />
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
