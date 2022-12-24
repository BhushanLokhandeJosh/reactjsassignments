import { useParams, Link, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import { TODOURL } from "../Constants/todoUrl";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { activity, pending, error } = useFetch(
    "http://localhost:8000/todo/" + id
  );

  const [Editedtitle, setEditedTitle] = useState(activity.title);
  const [status, setStatus] = useState(activity.status);

  const onTitleChange = (event) => {
    console.log(event.target.value);
    setEditedTitle(event.target.value);
  };

  const onStatusChange = (event) => {
    console.log(event.target.value);
    setStatus(event.target.value);
  };

  const onEditBlog = (event) => {
    const editedBlog = {
      id: activity.id,
      title: Editedtitle,
      status: status,
    };

    console.log(editedBlog);

    fetch(`http://localhost:8000/todo/${activity.id}`, {
      method: "PATCH",
      body: JSON.stringify(editedBlog),
      headers: { "content-type": "application/json" },
    });

    navigate("/");
  };

  return (
    <div>
      <h2 style={{ color: "red" }}>
        <b>Blog Details</b>
      </h2>

      <label for="id">Blog Id :</label>
      <input type="text" id="Id" value={activity.id} readOnly />
      <br />
      <br />

      <label for="title">Blog Title :</label>
      <input
        type="text"
        id="title"
        placeholder="Enter Todo"
        value={Editedtitle}
        onChange={onTitleChange}
      />
      <br />
      <br />

      <label for="status">Blog Status :</label>
      <select id="status" name="status" onChange={onStatusChange}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <br />
      <br />

      <button onClick={onEditBlog}>Edit Blogs</button>

      <br></br>

      <Link to="/">Return Back</Link>
    </div>
  );
};

export default BlogDetails;
