import React from "react";
import NavbarLogo from "../../components/header/NavbarLogo";
import PlayButton from "../../components/items/PlayButton";

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
    <div className="container-fluid header py-xxl-3 position-fixed z-1">
      <header className="">
        <Navbar expand="lg" className=" d-flex justify-content-between">
          <section className="navbar_logo">
            <a href="#topPage">
              <NavbarLogo />
            </a>
          </section>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className=" justify-content-evenly"
          >
            <Nav className="text-center">
              {NavbarItems.map((item) => (
                <Nav.Link href={item.url}>{item.name}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <section className="header_button d-none d-lg-block">
            <PlayButton content="Play" />
          </section>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
