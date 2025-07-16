import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Videofeed from './Components/Videofeed';
import Controller from './Components/Controller';


function App() {
  return (
    <div>

      <Navbar></Navbar>

      <div className='flex h-full'>

        <Sidebar></Sidebar>

        <Videofeed></Videofeed>

        <Controller></Controller>


      </div>



    </div>
  );
}

export default App;
