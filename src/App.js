import React, { useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


export default function App() {
  let [progress,setProgress]=useState(0);

  const page=12;
  const apiKey=process.env.REACT_APP_NEWS_API;





    return (
      <div>
        <Router>
        <LoadingBar
        height={2.5}
        color='#f11946'
        progress={progress}
      />
        <Navbar/>
        <Routes>
           <Route exact path = "/"  element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={page} country="us" category="general"/>}/>
            <Route exact path = "/business"  element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={page} country="us" category="business"/>}/>
            <Route exact path="/entertainment"  element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={page} country="us" category="entertainment"/>}/>
            <Route exact path = "/health"  element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={page} country="us" category="business"/>}/>
            <Route exact path = "/science"  element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={page} country="us" category="science"/>}/>
            <Route exact path = "/sports"  element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={page} country="us" category="sports"/>}/>
            <Route exact path = "/technology"  element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={page} country="us" category="technology"/>}/>
          </Routes>
          </Router>
      </div>
    );
  
}
