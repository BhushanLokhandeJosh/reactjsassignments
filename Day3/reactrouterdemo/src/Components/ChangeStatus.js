import { useParams } from "react-router-dom";

import useFetch from "./useFetch";

const ChangeStatus = () => {
  const { id } = useParams();
  console.log(id);
  const { activity, pending, error } = useFetch(
    "http://localhost:8000/todo/" + id
  );
  console.log(activity);
  return <div>Changing Status of Blog Having: {id}</div>;
};

export default ChangeStatus;
