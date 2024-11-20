// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import from react-router-dom
import Swiggy from './Component/Register';
import Login from './Component/Login';
// import Ingredients from './Component/ingredients';
// import Files from './Component/Files'
import Home from './Component/Home';
import SeeniFoodDeliveryApp from './Component/SeeniFoodDeliveryApp';

function App() {
  return (
    <div className="App">
      {/* <Ingredients/> */}
       {/* <Router>
        <Routes>
          <Route path="http://localhost:1121/login" element={<Login />} />   
          <Route path="/" element={<Swiggy />} /> 
        </Routes>
      </Router>  */}
      
<SeeniFoodDeliveryApp/>
      {/* <Home/> */}
      
    </div>
  );
}

export default App;
