import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Summary from './Summary';
import MainBody from './MainBody';
import SideBar from './SideBar';

function App(){
  return (
    <div>
      <Header/>
      <Profile/>
      <Summary/>
      <MainBody/>
      <SideBar/>
    </div>
  );
}

export default App;
