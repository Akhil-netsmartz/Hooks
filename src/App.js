import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import ErrorModal from './UI/ErrorModal';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error,setError] = useState();

  useEffect(()=>{
    const storedUser = localStorage.getItem('isLoggedIn');

    if(storedUser === '1')
    setIsLoggedIn(true)
  },[])

  function loginHandler(email, password){
      localStorage.setItem('isLoggedIn','1');
      setIsLoggedIn(true);
  }

  function logoutHandler(){
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }
  function errorChange(){
    setError(null)
  }


  return (
    <React.Fragment>
      {error && <ErrorModal  header={error.header} message={error.message} onConfirm = {errorChange}/>}
      <div>
          {!isLoggedIn && <Login onLogin={loginHandler}/>}
          {isLoggedIn && <Dashboard onLogout={logoutHandler}/>}
      </div>
    </React.Fragment>
  );
}
 
export default App;
