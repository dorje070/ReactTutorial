import './App.css';
import Counter from './Counter';
import Layout from './Layout';
import Maincontent from './Maincontent';
import NewCounter from './NewCounter';
import NewUserinfo from './NewUserinfo';
import Userinfo from './Userinfo';
import UserList from './UserList';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="pages">
        <div className="page-header">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>{' '}
          <NavLink to="/product" activeClassName="active">
            product
          </NavLink>{' '}
          <NavLink to="/about" activeClassName="active">
            about
          </NavLink>
        </div>
        <div className="page-content">
          <Routes>
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/product" element={<ProductPage />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
