import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import MenuPage from './components/MenuPage';
import MealPlanningPage from './components/MealPlanningPage';
import AddRecipePage from './components/AddRecipePage';
import NotFoundPage from './components/NotFoundPage';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header>
          <h1>Recipe Kavala Bro</h1>
        </header>

        {/* Navigation Bar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/mealplanning">Meal Planning</Link></li>
            <li><Link to="/add-recipe">Add Recipe</Link></li>
          </ul>
        </nav>

        {/* Main Routes */}
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage login={login} />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/"
              element={isAuthenticated ? <HomePage logout={logout} /> : <LoginPage login={login} />}
            />
            <Route path="/menu" element={isAuthenticated ? <MenuPage /> : <LoginPage login={login} />} />
            <Route path="/mealplanning" element={isAuthenticated ? <MealPlanningPage /> : <LoginPage login={login} />} />
            <Route path="/add-recipe" element={isAuthenticated ? <AddRecipePage /> : <LoginPage login={login} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <footer>
          <p>© 2024 Recipe Kavala Bro | All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
