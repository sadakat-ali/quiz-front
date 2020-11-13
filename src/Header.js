import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Quiz</h1>
      <a href="/"> Home </a>
    </header>
  )
} 

const headerStyle = {
  background: 'orange',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
}

export default Header;