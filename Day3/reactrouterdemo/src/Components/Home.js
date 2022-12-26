import { useEffect } from "react";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";

import useFetch from "./useFetch";
import ActivityList from "./ActivityList";

import { TODOURL } from "../Constants/todoUrl";

import Image from "../../src/error-banner.jpeg";

const Home = ({ activity, setActivity }) => {
  const { activity: todo, pending, error } = useFetch(TODOURL);

  useEffect(() => {
    setActivity(todo);
  }, [todo]);

  return (
    <div className="container">
      <div className="activity-list">
        <div>
          {error ? (
            <div>
              <img src={Image} alt="Can't Load Image"></img>
            </div>
          ) : pending ? (
            <SyncLoader color="#958255" />
          ) : (
            <div>
              <h2>All Blogs</h2>
              <Link to="/create" className="link">
                Create Blog
              </Link>
              {
                <ActivityList
                  activity={activity}
                  setActivity={setActivity}
                  title="Activity List"
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
