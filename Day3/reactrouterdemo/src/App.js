import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Components/Home";
import ActivityList from "./Components/ActivityList";
import BlogDetails from "./Components/BlogDetails";
import Form from "./Components/Form";
import DeleteBlog from "./Components/DeleteBlog";

import "./App.css";

function App() {
  const [activity, setActivity] = useState([]);

  return (
    <div className="App-header">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home activity={activity} setActivity={setActivity} />}
          ></Route>
          <Route
            path="/create"
            element={<Form activity={activity} setActivity={setActivity} />}
          ></Route>

          <Route
            path="/blogs/edit/:id/:status"
            element={<BlogDetails></BlogDetails>}
          ></Route>

          <Route
            path="/blogs/delete/:id"
            element={<DeleteBlog></DeleteBlog>}
          ></Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
