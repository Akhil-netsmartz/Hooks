import React from 'react';
import './styles.css';

const Dashboard = (props) => {
  return (
      <div>
         <button className = "button-right " onClick={props.onLogout}>Logout</button>
        <h1>This is your dashboard.</h1>
      </div>
      
  );
}; 

export default Dashboard;
