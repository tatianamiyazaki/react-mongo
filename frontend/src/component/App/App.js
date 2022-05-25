import React from 'react';
import Routers from '../../routers'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routers></Routers>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
