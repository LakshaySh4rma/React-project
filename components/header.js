import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <img src="/logo.jpg.jpeg" alt="Logo" height="40" />
        </a>
        <h3 className="mx-auto text-white fw-bold">Manorama Foundation</h3>
      </div>
    </nav>
  );
}

export default Header;