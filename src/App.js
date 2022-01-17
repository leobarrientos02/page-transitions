import React from "react";
import Home from "./pages/Home";
// ROUTES
import {Routes, Route} from 'react-router-dom';
import Nav from "./components/nav";
import ProductPage from "./pages/ProductPage";
import Boot from "./pages/Boot";
import Hat from "./pages/Hat";
import {AnimatePresence} from 'framer-motion';

function App() {
    // // Set loading state to true initially
    // const [loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     // Loaidn function to load data or fake it
    //     const loadData = async () =>{
    //         // Wait for two seconds
    //         await new Promise((r) => setTimeout(r, 2000));

    //         // Toggle loading State
    //         setLoading((loading) => !loading);
    //     };

    //     loadData();
    // },[]);
  
    // if(loading){
    // return(
    //     <div className="loading" ref={el}>
    //         <h1>
    //             ..Loading..
    //         </h1>
    //     </div>
    // );
    // }else{  
      return (
        <div className="app">
        <Nav />
        <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ProductPage" element={<ProductPage/>}></Route>
          <Route path="/Boot" element={<Boot/>}></Route>
          <Route path="/Hat" element={<Hat/>}></Route>
        </Routes>
        </AnimatePresence>
        </div>
      );
    // }
}

export default App;
