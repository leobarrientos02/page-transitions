import React from "react";
import Home from "./pages/Home";
// ROUTES
import {Routes, Route} from 'react-router-dom';
import Nav from "./components/nav";

function App() {
  return (
    <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
    </div>
  );
}

export default App;
