import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import WaitListPage from "./Components/WaitListPage";
import ListRegistration from "./Components/ListRegistration";

const App = () => {
  const [generalList, setGeneralList] = useState([]);
  const [priorityList, setPriorityList] = useState([]);

  const addToWaitlist = (user) => {
    if (user.inviteCode) {
      setPriorityList((prev) => [...prev, user]);
    } else {
      setGeneralList((prev) => [...prev, user]);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ListRegistration addToWaitlist={addToWaitlist} />} />
          <Route path="/waitlist" element={<WaitListPage priorityList={priorityList} generalList={generalList} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
