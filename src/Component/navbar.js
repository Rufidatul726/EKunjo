import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navStyles = {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        backgroundColor: '#fff',
        height: '80px',
        // width: '100%',
        padding: '0 50px',
        marginTop: '0px',
        boxShadow: '0 10px 10px rgba(0, 0, 0, 0.3)',
        textDecoration: 'none',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',

    };

    const linkStyles = {
        float: 'left',
        display: 'block',
        color: '#333',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        fontSize: '17px',
        marginTop: '0px',
    };

  return (
    <nav style={navStyles}>
      <ul>
        <li style={linkStyles}><Link to="../Services/Authentication/Registration">Registration</Link></li>
        <li style={linkStyles}><Link to="../Services/Authentication/Login">Login</Link></li>
        <li style={linkStyles}><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;