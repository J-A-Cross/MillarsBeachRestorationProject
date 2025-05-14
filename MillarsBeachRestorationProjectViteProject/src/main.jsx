import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Components/Sign In/SignIn.jsx';
import Layout from './Components/Layout/Layout.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);
