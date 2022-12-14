import { Link } from "react-router-dom";

import "../Styles/activitylist.css";

const ActivityList = ({ activity, setActivity, title }) => {
  return (
    <div className="activity-list">
      <table className="table">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Current Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {activity.map((object) => (
          <tr>
            <td>{object.id}</td>
            <td>{object.title}</td>
            <td>{object.status}</td>
            <td>
              <nav>
                <Link to={`/blogs/edit/${object.id}/${object.status}`}>
                  Edit
                </Link>
              </nav>
            </td>
            <td>
              <button>
                <Link to={`/blogs/delete/${object.id}`}>Delete</Link>
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default ActivityList;
