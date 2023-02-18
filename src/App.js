
import React from "react";
import "./style.css"
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Router from "./router";
import Navbar from "./companents/navbar";
import Futter from "./companents/futer";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Router />
          <Futter />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
