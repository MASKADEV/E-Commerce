import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/404';
import Profile from './pages/Profile';
// import { Provider } from 'react-redux';
// import store from './store/store';
import Layout from './components/commun/Layouts';
import Dashboard from './pages/Admin/Dashboard';
import FAQ from './pages/Support/faq/FAQ';
import Terms from './pages/Support/terms/Terms';
import Help from './pages/Support/help/Help';

const  App:React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Layout>{ <Home/>}</Layout>}/>
        <Route path='/home' element={<Layout>{ <Home/>}</Layout>}/>
        <Route path='/admin' element={<Layout>{ <Dashboard/>}</Layout>}/>
        <Route path='/faq' element={<Layout>{ <FAQ/>}</Layout>}/>
        <Route path='/terms' element={<Layout>{ <Terms/>}</Layout>}/>
        <Route path='/help' element={<Layout>{ <Help/>}</Layout>}/>
        <Route path='/profile' element={<Layout>{ <Profile /> }</Layout>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

// const AppWrapper = () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// }

export default App;