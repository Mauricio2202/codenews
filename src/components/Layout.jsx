import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import menuIcon from '../assets/menu.png';
import '../components/Layout.css';
import { Home } from './Home';
import { Clases } from './Clases';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <nav>
                <input
                    type="checkbox"
                    id="menu-toggle"
                    className="menu-checkbox"
                    checked={isMenuOpen} 
                    onChange={toggleMenu}
                />
                <label htmlFor="menu-toggle" className="menu-icon">
                    <img src={menuIcon} alt="Menú" />
                </label>
                <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <Link to="/" onClick={closeMenu}>Inicio</Link>
                    </li>
                    <li>
                        <Link to="news" onClick={closeMenu}>Noticias</Link>
                    </li>
                    <li>
                        <Link to="contribuyente" onClick={closeMenu}>Contribuyente</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
            <Home />
            <Clases />
        </div>
    );
};

export default Layout;