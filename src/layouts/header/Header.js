import React from "react";
import NavbarLogo from "../../components/header/NavbarLogo";
import PlayButton from "../../components/items/PlayButton";

import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const NavbarItems = [
    { name: "Overview", url: "#" },
    { name: "NFT Market", url: "#" },
    { name: "White Paper", url: "#" },
    { name: "Roadmap", url: "#" },
    { name: "Tokenomics", url: "#" },
  ];

  return (
    <div className="container-fluid header py-xxl-3 position-fixed z-1">
      <header className="">
        {/* <div className="navbar navbar-expand-lg ">
          <section className="navbar_logo">
            <NavbarLogo />
          </section>
          <button
            className=" navbar-toggler"
            type="button"
            // data-bs-toggle=" collapse"
            // data-bs-target="#navbarcontent"
            aria-controls="navbarcontent"
            data-toggle="collapse"
            data-target="#navbarcontent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" collapse navbar-collapse justify-content-evenly"
            id="navbarcontent"
          >
            <ul className=" navbar-nav mb-0 d-none d-lg-flex">
              {NavbarItems.map((item) => (
                <li
                  key={item.name}
                  className="nav-item px-3 list-unstyled text-center"
                >
                  <Link to={item.url} className="nav-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <section className="header_button ">
              <PlayButton content="Play" />
            </section>
          </div>
        </div> */}
        <Navbar expand="lg" className=" d-flex justify-content-between">
          <section className="navbar_logo">
            <NavbarLogo />
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
