import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>ToDo List</h1>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '15px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;