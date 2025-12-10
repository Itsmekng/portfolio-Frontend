import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import ContactUs from "./Components/Links/ContactUs.js";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Components/Links/Profile.js";
import Login from "./Components/Links/Login.js";
import Resister from "./Components/Links/Resister.js";
import { store } from "./App/store.js";
import { Provider } from "react-redux";
import AllUser from "./Components/Admin/AllUser.js";
import AdminPanel from "./Components/Admin/AdminPanel.js";
import UpdateUser from "./Components/Admin/UpdateUser.js";
import CreateProject from "./Components/Admin/CreateProject.js";
import SearchUser from "./Components/Admin/SearchUser.js";
import DeleteUser from "./Components/Admin/DeleteUser.js";
import UserMessage from "./Components/Admin/UserMessage.js";
import ProjectInfo from "./Components/Admin/ProjectInfo.js";
import Dashboard from "./Components/Admin/Dashboard.js";
import ApexChart from "./Components/Admin/Charts/ApexChart.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/ContactUs" element={<ContactUs />}></Route>
          <Route exact path="/Profile" element={<Profile />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Resister" element={<Resister />}></Route>
          <Route exact path="/AllUser" element={<AllUser />}></Route>
          <Route exact path="/UpdateUser" element={<UpdateUser />}></Route>
          <Route exact path="/CreateProject" element={<CreateProject />}></Route>
          <Route exact path="/Admin" element={<AdminPanel />}></Route>
          <Route exact path="/SearchUser" element={<SearchUser />}></Route>
          <Route exact path="/DeleteUser" element={<DeleteUser />}></Route>
          <Route exact path="/UserMessage" element={<UserMessage />}></Route>
          <Route exact path="/ProjectInfo" element={<ProjectInfo />}></Route>
          <Route exact path="/Dashboard" element={<Dashboard />}></Route>
          <Route exact path="/ApexChart" element={<ApexChart />}></Route>
        </Routes>
      </Router>
    </Provider>
);
