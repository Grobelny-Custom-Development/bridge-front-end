/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const sideNavStyled = styled.ul`
    position: fixed;
    width: 300px;
    left: 0;
    top: 0;
    margin: 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    height: 100%;
    height: calc(100% + 60px);
    height: -moz-calc(100%);
    padding-bottom: 60px;
    background-color: #fff;
    z-index: 999;
    overflow-y: auto;
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: translateX(-105%);
    transform: translateX(-105%);
`;


const Header = () => {
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)'
  };
  return (
    <div className="navbar-fixed">
      <nav className="red">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              SSR News
            </a>
            <a href="javascript:void(0)" onClick={toggleMenu} className="sidenav-trigger right">
              <i className="material-icons">menu</i>
            </a>
            <div
              className="sidenav-overlay"
              style={menuOpen ? { display: 'block', opacity: 1 } : null}
              onClick={toggleMenu}
            />
            <sideNavStyled style={menuOpen ? stylesOpen : null}>
              <li>
                <a className="subheader">Menu</a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <Link to="/" className="item" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles/techradar" className="item" onClick={toggleMenu}>
                  Tech Radar
                </Link>
              </li>
              <li>
                <Link to="/articles/mashable" className="item" onClick={toggleMenu}>
                  Mashable
                </Link>
              </li>
              <li>
                <Link to="/articles/the-verge" className="item" onClick={toggleMenu}>
                  The Verge
                </Link>
              </li>
              <li>
                <Link to="/articles/the-next-web" className="item" onClick={toggleMenu}>
                  TNW
                </Link>
              </li>
              <li>
                <Link to="/articles/wired" className="item" onClick={toggleMenu}>
                  Wired
                </Link>
              </li>
              <li>
                <Link to="/articles/recode" className="item" onClick={toggleMenu}>
                  Recode
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/articles/techradar" className="item">
                  Tech Radar
                </Link>
              </li>
              <li>
                <Link to="/articles/mashable" className="item">
                  Mashable
                </Link>
              </li>
              <li>
                <Link to="/articles/the-verge" className="item">
                  The Verge
                </Link>
              </li>
              <li>
                <Link to="/articles/the-next-web" className="item">
                  TNW
                </Link>
              </li>
              <li>
                <Link to="/articles/wired" className="item">
                  Wired
                </Link>
              </li>
              <li>
                <Link to="/articles/recode" className="item">
                  Recode
                </Link>
              </li>
            </sideNavStyled>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
