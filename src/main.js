import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homelight from "../src/pages/homeLight";


function App() {
  return (
  	<div>
	  <BrowserRouter>
	    <Routes>
		    <Route path = "/" element={< Homelight/>}/>
		</Routes>
	  </BrowserRouter>
    </div>
  );
}

export default App;