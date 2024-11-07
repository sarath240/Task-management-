import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Tasks from "./Components/Tasks";
import Metrics from "./Components/Metrics";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/metrics" element={<Metrics />} />
      </Routes>
    </>
  );
}

export default App;
