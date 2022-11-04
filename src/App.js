import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";

class App extends Component {
  render(){
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/search" element={<Search/>}/>
    </Routes>
    </BrowserRouter>
    )
  }  
}

  export default App