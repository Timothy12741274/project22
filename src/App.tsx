import React from 'react';
import logo from './logo.svg';
import './App.css';
import Create from "./pages/News/Create/Create";
import News from "./pages/News/News";
import {Route, Routes} from "react-router-dom";
import NewsItem from "./pages/NewsItem/NewsItem";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/news'} element={<News/>}/>
            <Route path={'/news/:id'} element={<NewsItem/>}/>
        </Routes>
    </div>
  );
}

export default App;
