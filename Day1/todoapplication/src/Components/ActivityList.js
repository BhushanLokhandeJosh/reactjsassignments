const ActivityList = ({
  activity,
  title,
  deleteActivity,
  changeStatus,
  editTodo,
}) => {
  return (
    <div className="activity-list">
      <table
        class="table table-striped"
        style={{
          color: "black",
          backgroundColor: "white",
          marginTop: "50px",
          borderCollapse: "collapse",
          borderSpacing: "10px",
          border: "1px solid black",
        }}
      >
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>status</th>
          <th>Edit</th>
          <th>Change Status</th>
          <th>Delete</th>
        </tr>
        <br />
        {activity.map((object) => (
          <tr>
            <td>{object.id}</td>
            {/* <td>
              {object.Date.getFullYear() +
                "/" +
                object.Date.getMonth() +
                "/" +
                object.Date.getDate() +
                " On " +
                object.Date.getHours() +
                " Hrs " +
                object.Date.getMinutes() +
                " min " +
                object.Date.getSeconds()}
            </td> */}
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
