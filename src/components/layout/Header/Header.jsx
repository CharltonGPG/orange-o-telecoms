import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { ROUTES } from '@routes';
import { ROUTES } from '@routes';
import Button from '@components/common/Button/Button';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: ROUTES.HOME, label: 'Home' },
    { path: ROUTES.SERVICES, label: 'Services' },
    { path: ROUTES.COVERAGE, label: 'Coverage' },
    { path: ROUTES.BUSINESS, label: 'Business' },
    { path: ROUTES.CONTACT, label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
              <h1>Orangeo Telecoms</h1>
            </Link>
          </div>

          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.menuIcon}></span>
            <span className={styles.menuIcon}></span>
            <span className={styles.menuIcon}></span>
          </button>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.path} className={styles.navItem}>
                  <Link 
                    to={item.path}
                    className={`${styles.navLink} ${
                      location.pathname === item.path ? styles.active : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.ctaButtons}>
              <Button 
                variant="primary" 
                size="small"
                to={ROUTES.CONTACT}
              >
                Get Quote
              </Button>
              <Button 
                variant="outline" 
                size="small"
                to={ROUTES.COVERAGE}
              >
                Check Coverage
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;