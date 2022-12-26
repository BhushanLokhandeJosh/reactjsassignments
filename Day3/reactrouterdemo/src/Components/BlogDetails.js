import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";

import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id, status } = useParams();
  const navigate = useNavigate();

  const [Editedtitle, setEditedTitle] = useState(null);
  const [Status, setStatus] = useState(null);

  let result = useFetch("http://localhost:8000/todo/" + id);

  useEffect(() => {
    setEditedTitle(result.activity.title);
    setStatus(result.activity.status);
  }, [result.activity]);

  const onTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const onStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const onEditBlog = (event) => {
    const editedBlog = {
      id: result.activity.id,
      title: Editedtitle,
      status: Status,
    };

    fetch(`http://localhost:8000/todo/${result.activity.id}`, {
      method: "PATCH",
      body: JSON.stringify(editedBlog),
      headers: { "content-type": "application/json" },
    });

    navigate("/");
  };

  return (
    <div>
      {result.pending ? (
        <SyncLoader color="#958255" />
      ) : (
        <div className="edit-box">
          <h3>
            <b>Blog Details</b>
          </h3>
          <label for="id">Blog Id </label>
          <input type="text" id="Id" value={result.activity.id} readOnly />
          <br />
          <br />
          <label for="title">Blog Title </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Todo"
            value={Editedtitle}
            onChange={onTitleChange}
          />
          <br />
          <br />
          <label for="status">Blog Status </label>
          <select
            id="status"
            name="status"
            defaultValue={status}
            onChange={onStatusChange}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>

          <br />
          <br />
          <button onClick={onEditBlog}>Edit Blog</button>
          <br></br>
          <br></br>
          <Link to="/" className="link">
            Return to Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
