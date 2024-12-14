import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const HomePage = ({ logout }) => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', darkMode ? 'disabled' : 'enabled');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('darkMode');
    if (storedTheme === 'enabled') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="hero-section">
        <h1>Welcome to Recipe Kavala Bro</h1>
        <p>Your one-stop platform for exploring and sharing delightful recipes!</p>
        <div className="hero-buttons">
          <button className="futuristic-btn" onClick={toggleDarkMode}>
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
          <button
            className="futuristic-btn"
            onClick={() => alert('Stay tuned! App download coming soon!')}
          >
            📲 Download App
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About Recipe Kavala Bro</h2>
        <p>
          Recipe Kavala Bro is your companion for discovering, cooking, and sharing
          amazing recipes from around the world. From traditional Indian curries to
          Italian classics and more, this is your culinary haven!
        </p>
        <p>Stay tuned for exciting events like live cooking shows and recipe contests!</p>
      </section>

      {/* Event Section */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <ul>
          <li>
            <strong>Live Cooking Show:</strong> Join Chef John on <em>December 10th</em> for a live cooking session.
          </li>
          <li>
            <strong>Recipe Contest:</strong> Participate and win exciting prizes starting <em>December 15th</em>.
          </li>
        </ul>
      </section>

      {/* Logout Button */}
      <footer className="homepage-footer">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </footer>
    </div>
  );
};

export default HomePage;
