import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RightMenu } from './Components/RightMenuComponent/RightMenu';
import 'semantic-ui-css/semantic.min.css';
import { UserContextProvider } from './Context';



function App() {
  
  return ( 
    <div className='App'>
    <UserContextProvider>
    <BrowserRouter>
    <RightMenu/>
    </BrowserRouter>
    </UserContextProvider>
    </div>
    
  );
}

export default App