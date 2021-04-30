import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from '../../components/Login/Login';
import Logo from '../../components/Logo/Logo';

function Login() {
  return (
    <div className="meals">
      {/* <span className="logo">DO EAT</span> */}
      <Logo />
      <LoginComponent />
    </div>
  );
}

export default Login;
