import React from 'react';
import './App.css';
import Layout from './components/Commun/Layouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Layout>{ <Home/>}</Layout>}/>
        <Route path='/home' element={<Layout>{ <Home/>}</Layout>}/>
      </Routes>
    </Router>
  );
}

export default App;
