import React from 'react';
import './App.css';
import { LeftMenu } from './Components/LeftComponent/LeftMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '/Users/johnpod/ReactProject/my-app/src/Components/LeftComponent/LeftMenu.css';
import { RightMenu } from './Components/RightMenuComponent/RightMenu';
import 'semantic-ui-css/semantic.min.css';






function App() {
  return ( 
    <div className='App'>
    <BrowserRouter>
    <LeftMenu/>
    <RightMenu/>
    </BrowserRouter>
    </div>
    
  );
}

export default App