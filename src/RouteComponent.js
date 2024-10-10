import React from 'react';
import { Routes,Route } from 'react-router-dom'; 


import App from './App';
import CardDetails from "./CardDetails";




function RouteComponent() {






  return (
    <>
     
    <Routes>
    <Route path="/" element={<App/>}></Route> 
    <Route path="/card/:id" element={<CardDetails/>}></Route>
    

    

    {/* <Route path="/dishes/:dishId" element={<DishDetails/>}></Route> */}
    

    </Routes>




    

  </>
  )
}

export default RouteComponent;