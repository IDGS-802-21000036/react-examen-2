import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Busqueda } from '../components/Busqueda';
import './HomePage.css';

export const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/home';
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    setSearchTerm(value);
    navigate(`/home/items?search=${value}`);
  };

  return (
    <div className="homepage-container">
      {isHome ? (
        <div className="homepage-content">
          <i className="pi pi-home homepage-icon-large"></i>
          <h1>Bazar Online</h1>
          <Busqueda onSearch={handleSearch} />
        </div>
      ) : (
        <div className="homepage-content-responsive">
          <i className="pi pi-home homepage-icon-small"></i>
          <Busqueda onSearch={handleSearch} />
        </div>
      )}
      <Outlet />
    </div>
  );
};