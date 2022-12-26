import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const DeleteBlog = () => {
  const { id } = useParams();
  fetch("http://localhost:8000/todo/" + id, {
    method: "DELETE",
  });

  return (
    <div>
      <div>Todo With Id : {id} Deleted Successfully...</div>
      <Link to="/">Return Back...</Link>
    </div>
  );
};

export default DeleteBlog;
