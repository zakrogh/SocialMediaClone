import React from 'react';
import SidePerson from './SidePerson';

function SideBar(){
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <SidePerson/>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
