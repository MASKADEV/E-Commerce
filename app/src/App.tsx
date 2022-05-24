import React from 'react';
import './App.css';
import Layout from './components/Commun/Layouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/404';
import Profile from './pages/Profile';

const  App:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Layout>{ <Home/>}</Layout>}/>
        <Route path='/home' element={<Layout>{ <Home/>}</Layout>}/>
        <Route path='/profile' element={<Layout>{ <Profile /> }</Layout>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
2