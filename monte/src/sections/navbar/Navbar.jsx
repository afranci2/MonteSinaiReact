import React from "react";
import { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo/new-logo.png";
import mobile__logo__file from "../../assets/logo/mobile_logo.webp";
import { Outlet, Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search.svg";
import './navbar.css'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <div className="navbar absolute flex h-16 justify-between items-center w-screen p-8 z-50 text-white">
        <div className="mobile-menu md:hidden">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={29}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu2Line
              color="#fff"
              size={24}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="links-mobile slide-in-left ">
              <div
                className="text-center z-50 mobile-links w-5/6 p-10 bg-slate-100 top-16
               flex-col absolute rounded text-black 
             
              font-semibold text-2xl"
              >
                <div className=" mobile-menu-pop py-20">
                  <ul>
                    <li className="p-2" key={1}>
                      <Link to="/conocernos">
                        <p>Conocernos</p>
                      </Link>
                    </li>
                    <li className="p-2" key={1}>
                      <Link to="/iglesias">
                        <p>Iglesias</p>
                      </Link>
                    </li>
                    <li className="p-2" key={1}>
                      <Link to="/unete">
                        <p>Unete</p>
                      </Link>
                    </li>
                    <li className="p-2" key={1}>
                      <Link to="/eventos">
                        <p>Eventos</p>
                      </Link>
                    </li>
                    <li className="p-2" key={1}>
                      <Link to="/donar">
                        <p>Donar</p>
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="hidden md:flex items-center cursor-pointer">
          <Link to="/">
            {" "}
            <img className="w-48 mr-2 mt-4 mb-4" src={logo} />
          </Link>
        </div>
        <div className="mobile__logo mx-auto block relative w-16 h-auto md:hidden">
          <a href="./index.html">
            <img src={mobile__logo__file} />
          </a>
        </div>
        <div>
          <ul className="links hidden md:flex items-center mr-3 ">
            <li className="ml-12 inline-block text-xs" key={1}>
              <Link to="/conocernos">Conocernos</Link>
            </li>
            <li className="ml-12 inline-block text-xs" key={2}>
              <Link to="/iglesias">Iglesias</Link>
            </li>
            <li className="ml-12 inline-block text-xs" key={3}>
              <Link to="/unete">Unete</Link>
            </li>
            <li className="ml-12 inline-block text-xs" key={4}>
              <Link to="/eventos">Eventos</Link>
            </li>
            <li className="ml-12 inline-block text-xs" key={5}>
              <Link to="/donar">Donar</Link>
            </li>
            <li className="ml-12 inline-block text-xs w-6" key={6}>
              <img src={searchIcon} />
            </li>
          </ul>
        </div>
        <div className="mobile__search w-6 md:hidden">
          <Link to="/">
            {" "}
            <img className="w-6 mr-2 mt-4 mb-4" src={searchIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
