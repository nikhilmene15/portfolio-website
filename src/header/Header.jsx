import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

import "./header.scss";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showList, setShowList] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setVisible(currentPosition < scrollPosition || currentPosition < 200);
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleOpenMenu = () => {
    setShowList(true);
    setOpenMenu(false);
  };
  const handleCloseMenu = () => {
    setShowList(false);
    setOpenMenu(true);
  };
  const handleList = () => {
    setShowList(false);
    setOpenMenu(true);
  };
  return (
    <>
      <header style={{ top: visible ? "0" : "-80px", transition: "top 0.5s" }}>
        <div className="container">
          <div className="nav__wrapper d-flex justify-content-between align-items-center">
            <div className="logo">
              <img
                src="assets/images/nikhil_logo.png"
                className="img-fluid"
                alt="nik logo"
              />
            </div>
            <ul className="d-flex align-items-center gap-5 mb-0 d-none d-md-flex">
              <li>
                <a href="#home" className="nav_item">
                  home
                </a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#projects">projects</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
            {openMenu && (
              <div className="hamburger_menu d-block d-md-none">
                <div onClick={handleOpenMenu}>
                  <span className="mb-2"></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>

          {showList && (
            <ul className="d-flex align-items-center justify-content-center flex-column align-items-center gap-5 mb-0 mob_list ">
              <li>
                {!openMenu && (
                  <IoClose
                    className="close d-block d-lg-none"
                    onClick={handleCloseMenu}
                  />
                )}
              </li>
              <li>
                <a href="#home" onClick={handleList}>
                  home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleList}>
                  about
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleList}>
                  projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleList}>
                  contact
                </a>
              </li>
            </ul>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
