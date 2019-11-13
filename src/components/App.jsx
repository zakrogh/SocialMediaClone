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
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Profile/>
            <Summary/>
          </div>
          <div className="col-md-3">
            <MainBody/>
          </div>
          <div className="col-md-3">
            <SideBar/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
