import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Components/Sign In/SignIn.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Ecological from './Components/Ecological/Ecologcal.jsx';
import Posts from './Components/Posts/Posts.jsx';
import Donate from './Components/Donate/Donate.jsx';
import Home from './Components/Home/Home.jsx'
import Newsletter from './Components/Newsletter/Newsletter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ecological" element={<Ecological />} />
          <Route path="/blog" element={<Posts/>}/>
          <Route path="/donate" element={<Donate />}/>
          <Route path="/newsletter" element={<Newsletter />}/>
        </Routes> 
      </Layout>
    </Router>
  </StrictMode>
);
