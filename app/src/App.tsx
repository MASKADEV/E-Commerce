import React from 'react';
import './App.css';
import Layout from './components/commun/Layouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/404';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import store from './store/store';

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

const AppWrapper = () => {
  return (
    <Provider store={store}>
    <App />
    </Provider>
  )
}

export default AppWrapper;