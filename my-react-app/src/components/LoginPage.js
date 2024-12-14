import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
  
const LoginPage = ({ login }) => {  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');  
  const [showPassword, setShowPassword] = useState(false);  
  const navigate = useNavigate();  
  
  const handleLogin = (e) => {  
   e.preventDefault();  
   const storedUsername = localStorage.getItem('username');  
   const storedPassword = localStorage.getItem('password');  
  
   if (username === storedUsername && password === storedPassword) {  
    login();  
    navigate('/');  
   } else {  
    setError('Invalid credentials. Please try again.');  
   }  
  };  
  
  const handleShowPassword = () => {  
   setShowPassword(!showPassword);  
  };  
  
  return (  
   <div className="login-container">  
    <h2>Login</h2>  
    <form onSubmit={handleLogin}>  
      <div className="input-group">  
       <label>Username</label>  
       <input  
        type="text"  
        placeholder="Username"  
        value={username}  
        onChange={(e) => setUsername(e.target.value)}  
        required  
       />  
      </div>  
      <div className="input-group">  
       <label>Password</label>  
       <input  
        type={showPassword ? 'text' : 'password'}  
        placeholder="Password"  
        value={password}  
        onChange={(e) => setPassword(e.target.value)}  
        required  
       />  
       <span className="show-password" onClick={handleShowPassword}>  
        {showPassword ? 'Hide' : 'Show'}  
       </span>  
      </div>  
      {error && <p className="error-message">{error}</p>}  
      <button type="submit">Sign In</button>  
    </form>  
    <p>  
      Don't have an account? <a href="/signup">Sign up here</a>  
    </p>  
    <p>  
      Forgot password? <a href="/forgot-password">Reset here</a>  
    </p>  
   </div>  
  );  
};  
  
export default LoginPage;
