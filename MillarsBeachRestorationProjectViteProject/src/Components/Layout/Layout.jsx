// Components/Layout/Layout.jsx
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Layout.css'; // Define background styles here

const Layout = ({ children }) => {
  const location = useLocation();

  // Choose background based on route
  const getBackgroundClass = () => {
    if (location.pathname === '/signin') return 'bg-signin';
    if (location.pathname === '/contact') return 'bg-contact';
    if (location.pathname === '/ecological') return 'bg-ecological';
    if (location.pathname === '/blog') return 'bg-blog';
    return 'bg-home';
  };

  return (
    <div className={`layout-container ${getBackgroundClass()}`}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
