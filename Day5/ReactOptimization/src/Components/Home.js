import { useCallback, useEffect, useMemo, useState } from "react";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";

import useFetch from "./useFetch";
import { ActivityList } from "./ActivityList";

import { TODOURL } from "../Constants/todoUrl";

import Image from "../error-banner.jpeg";

const Home = () => {
  const [activity, setActivity] = useState([]);
  const { activity: todo, pending, error } = useFetch(TODOURL);
  const [searchtitle, setSearchtitle] = useState("");
  const [sort, setSorting] = useState("ASC");
  const [status, setStatus] = useState("All");
  const [todos, setTodos] = useState(activity);

  useEffect(() => {
    setActivity(todo);
  }, [todo]);

  useEffect(() => {
    setTodos(activity);
  }, [activity]);

  const handleSorting = useMemo(() => {
    todos.sort((todo1, todo2) =>
      sort === "ASC"
        ? todo1.title > todo2.title
          ? 1
          : -1
        : todo1.title < todo2.title
        ? 1
        : -1
    );
  }, [sort, todos]);

  const handleStatus = useMemo(() => {
    if (status === "All") {
      setTodos(activity);
    } else if (status === "Completed" || status === "Pending") {
      setTodos(activity.filter((todo) => todo.status.includes(status)));
    }
    if (searchtitle && (status === "Completed" || status === "Pending")) {
      setTodos(
        activity.filter(
          (todo) =>
            todo.title.toLowerCase().includes(searchtitle.toLowerCase()) &&
            todo.status.includes(status)
        )
      );
    } else if (searchtitle && status === "All") {
      setTodos(activity.filter((todo) => todo.title.includes(searchtitle)));
    }
  }, [status, searchtitle]);

  return (
    <div className="container">
      <div className="activity-list">
        <div>
          {error ? (
            <div>
              <img src={Image} alt="Can't Load Image"></img>
            </div>
          ) : pending ? (
            <SyncLoader color="#958255" className="loader" />
          ) : (
            <div>
              <h1 className="header">All Todos</h1>
              <hr />

              <div>
                <Link to="/create" className="btn btn-link">
                  <b className="link">Create Todo</b>
                </Link>
              </div>

              <ActivityList
                activity={activity}
                setActivity={setActivity}
                title="Activity List"
                searchtitle={searchtitle}
                setSearchtitle={setSearchtitle}
                todos={todos}
                status={status}
                setStatus={setStatus}
                sort={sort}
                setSorting={setSorting}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
