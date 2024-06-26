import React from 'react';
import { Link } from 'react-router-dom';

const Header1 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#282c34', padding: '10px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <a className="navbar-brand" href="#" style={{ fontSize: '24px', fontWeight: 'bold', color: '#61dafb' }}>Student CRUD</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" style={{ color: '#61dafb' }}></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" style={{ display: 'flex', alignItems: 'center', listStyle: 'none', gap: '20px' }}>
          <li className="nav-item active" style={{ margin: '0 15px' }}>
            <Link to="/" className="nav-link" style={{ color: '#ffffff', textDecoration: 'none', padding: '5px 10px', borderRadius: '5px', transition: 'background-color 0.3s', hover: { backgroundColor: '#61dafb' } }}>Home</Link>
          </li>
          <li className="nav-item" style={{ margin: '0 15px' }}>
            <Link to="/add" className="nav-link" style={{ color: '#ffffff', textDecoration: 'none', padding: '5px 10px', borderRadius: '5px', transition: 'background-color 0.3s', hover: { backgroundColor: '#61dafb' } }}>Create Student</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" style={{ display: 'flex', alignItems: 'center' }}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ marginRight: '10px', borderRadius: '5px' }} />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ backgroundColor: '#61dafb', color: '#ffffff', border: 'none', borderRadius: '5px', padding: '5px 15px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Header1;
