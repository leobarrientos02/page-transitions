import React from "react";
import Home from "./pages/Home";
// ROUTES
import {Routes, Route} from 'react-router-dom';
import Nav from "./components/nav";
import ProductPage from "./pages/ProductPage";
import Boot from "./pages/Boot";
import Hat from "./pages/Hat";

function App() {
  return (
    <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ProductPage" element={<ProductPage/>}></Route>
          <Route path="/Boot" element={<Boot/>}></Route>
          <Route path="/Hat" element={<Hat/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
