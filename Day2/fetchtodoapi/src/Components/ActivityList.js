import "../styles/activitylist.css";

const ActivityList = ({
  activity,
  setActivity,
  title,
  deleteActivity,
  changeStatus,
  editTodo,
}) => {
  return (
    <div className="activity-list">
      <table className="table">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Current Status</th>
          <th>Edit</th>
          <th>Change Status</th>
          <th>Delete</th>
        </tr>
        {activity.map((object) => (
          <tr>
            <td>{object.id}</td>
            <td>{object.title}</td>
            <td>{object.status}</td>
            <td>
              <button onClick={() => editTodo(object.id)}>Edit</button>
            </td>
            <td>
              <button onClick={() => changeStatus(object.id)}>Change</button>
            </td>
            <td>
              <button onClick={() => deleteActivity(object.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default ActivityList;
