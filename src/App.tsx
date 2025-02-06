import React, { useState } from 'react';
import { Routes, Route } from 'react-router';
import { Link } from "react-router-dom"

// import logo from './logo.svg';
import './App.css';

// function App() {
function App() {
  // Navbar component
  function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/profile">Profile</Link>
          </li>
          <li>
            <Link to = "/login">Login</Link>
          </li>
        </ul>
        
      </nav>
    );
  }

  function Profile() {
    return (
      <div>
        <h1>Profile</h1>
        <p>Welcome to your profile page!</p>
      </div>
    );
  }

  const Home = () => {
    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
      </div>
    );
  }

  function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>{username}</p>
        <p>{password}</p>
      </div>
    );
  }

  // App's return
  return (
    <>
    <Profile />
      <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
