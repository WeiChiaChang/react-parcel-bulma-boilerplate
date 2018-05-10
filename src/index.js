import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import Article from "./components/Article";
import Footer from "./components/Footer";

const view = (
  <div>
    <Navbar></Navbar>
    <div className="container">
       <Article></Article>
    </div>
    <Footer></Footer>
  </div>
);

var mountNode = document.getElementById("app");
ReactDOM.render(view, mountNode);