import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logoImg from "./logoPic.ico";
import "./NavBar.css";
const NavBar = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
  return (
    <header className='header__middle'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          {/* Add Logo  */}
          <div className='header__middle__logo'>
            <NavLink to='/'>
              <img className='logoImg' src={`${logoImg}`} alt='' />
            </NavLink>
          </div>
          <div className='header__middle__menus ms-auto'>
            <nav className='main-nav '>
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className='menubar__button'
                    style={{ display: "none" }}
                    onClick={toggleClass}>
                    <FiXCircle />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className='menubar__button'
                    style={{ display: "none" }}
                    onClick={toggleClass}>
                    <FiAlignRight />
                  </span>
                </>
              )}
              <ul className={boxClass.join(" ")}>
                <li className='menu-item'>
                  <NavLink
                    exact='true'
                    activeclassname='is-active'
                    onClick={toggleClass}
                    to={`/`}>
                    Home
                  </NavLink>
                </li>
                <li className='menu-item '>
                  <NavLink
                    onClick={toggleClass}
                    activeclassname='is-active'
                    to={`/About`}>
                    About
                  </NavLink>
                </li>
                <li
                  onClick={toggleSubmenu}
                  className='menu-item sub__menus__arrows'>
                  <Link to='#'>
                    Category <FiChevronDown />
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeclassname='is-active'
                        to={`/SupplementProducts`}>
                        Supplements
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeclassname='is-active'
                        to={`/CosmeticsProducts`}>
                        Cosmetics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeclassname='is-active'
                        to={`/nutretionproducts`}>
                        Nutrition
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeclassname='is-active'
                        to={`/PharmaceuticalsProducts`}>
                        Pharmaceutical
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className='menu-item '>
                  <NavLink
                    onClick={toggleClass}
                    activeclassname='is-active'
                    to={"/contactus"}>
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
