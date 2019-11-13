import React from 'react';
import NavBar from './NavBar';
import SearchBox from './SearchBox';

function Header(){
  return (
    <div>
      <h1>Social Media Clone</h1>
      <NavBar/>
      <SearchBox/>
    </div>
  );
}

export default Header;
