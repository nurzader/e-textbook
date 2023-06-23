import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="font-poppins">
      <header className="header">
        <nav className="flex items-center justify-between">
          <h3 className="flex items-center w-[250px] font-bold ">
            <Link to="/" className="logo">
              Имитационное моделирование
            </Link>
          </h3>
          <ul className="flex items-center justify-between gap-8 text-lg">
            <li className='navItem'>
              <Link to="/">Учебник</Link>
            </li>
            <li className='navItem'>
              <Link to="/test">Тест</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
