import React from 'react';

const Header = () => {
  return (
    <header className="navbar navbar-light bg-light p-3">
      <span className="navbar-brand mb-0 h1">Welcome, User</span>
      <div className="d-flex">
        <button className="btn btn-outline-secondary me-2">Settings</button>
        <button className="btn btn-outline-danger">Logout</button>
      </div>
    </header>
  );
};

export default Header;
