import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
