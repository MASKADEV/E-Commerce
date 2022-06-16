import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/404';
import Profile from './pages/Profile';
import Dashboard from './pages/Admin/Dashboard';
import FAQ from './pages/Support/faq/FAQ';
import Terms from './pages/Support/terms/Terms';
import Help from './pages/Support/help/Help';
import ProductDetails from './pages/product_page/product_details';
import Layout from './components/Commun/Layouts';
import Checkout from './pages/checkout';
import SearchPage from './pages/search_page';

const  App:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Layout>{ <Home/>}</Layout>}/>
        
        {/* Global Path */}
        <Route path='/home' element={<Layout>{ <Home/>}</Layout>}/>
        <Route path='/search' element={<Layout>{ <SearchPage/>}</Layout>}/>
        <Route path='/terms' element={<Layout>{ <Terms/>}</Layout>}/>
        <Route path='/help' element={<Layout>{ <Help/>}</Layout>}/>
        <Route path='/faq' element={<Layout>{ <FAQ/>}</Layout>}/>
        <Route path='/product_detail/:id' element={<Layout>{ <ProductDetails />}</Layout>}/>
        <Route path='/checkout' element={<Layout>{ <Checkout/>}</Layout>}/>

        {/* Private Path All Role */}
        <Route path='/profile' element={<Layout>{ <Profile /> }</Layout>}/>

        {/* Admin Role */}
        <Route path='/admin' element={<Layout>{ <Dashboard/>}</Layout>}/>
        
        {/* Error Pages */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;