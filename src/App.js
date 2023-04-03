import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import VideoPage from './Pages/VideoPage'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
              <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='videos/:videoid' element={<VideoPage />}></Route>
              </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
