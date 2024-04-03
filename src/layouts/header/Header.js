import React from "react";
import NavbarLogo from "../../components/header/NavbarLogo";
import PlayButton from "../../assets/components/play_button.png";
import "../../styles/components/layout/header/header.css";

import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const NavbarItems = [
    { name: "Overview", url: "#Overview" },
    { name: "NFT Market", url: "#NFT_ITEM" },
    { name: "White Paper", url: "#WhitePaper" },
    { name: "Roadmap", url: "#Roadmap" },
    { name: "Tokenomics", url: "#Tokenomics" },
  ];

  return (
    <header className="header position-fixed w-100 z-1">
      <div className="container">
        <Navbar expand="lg" className=" row">
          <section className=" col-3 col-lg-2">
            <a href="#topPage">
              <NavbarLogo />
            </a>
          </section>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="col-2" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className=" justify-content-center col-8"
          >
            <Nav className="navbar">
              {NavbarItems.map((item) => (
                <Nav.Link href={item.url} key={item.url} className="nav_item">
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <div className=" d-none d-lg-flex justify-content-end col-2">
            <img alt="" src={PlayButton} />
          </div>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
