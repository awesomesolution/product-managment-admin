import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import default styles
import LoginForm from './components/LoginForm';   // Adjust the path based on your folder structure
import Menu from './components/Menu';   // Adjust the path based on your folder structure
import AdminHomePage from './components/AdminHomePage';
import ProductList from './components/ProductList';
import UserList from './components/UserList';
// import AddProductForm from './components/_AddProductForm';

function App() {

  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (email: string, password: string) => {
    // You can handle the login logic here (e.g., API request)
    // console.log("Login details:", email, password);
    // After successful login, navigate to another page (e.g., Dashboard or Home page)
    setIsLoggedIn(true);
  };


  // Redirect component
  const RedirectToHome: React.FC = () => {
    const navigate = useNavigate();

    // Redirect to the home page
    React.useEffect(() => {
      navigate('/');
    }, [navigate]);

    return null; // No UI is displayed, just a redirect
  };

  return (
    <div className="App">
      <ToastContainer /> {/* Toast container for displaying messages */}
      <Routes>
        <Route path="/" element={<AdminHomePage />} />
        <Route path="/menu" element={<Menu />}>
          <Route path="product-list" element={<ProductList />} />
          <Route path="user-list" element={<UserList />} />
        </Route>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route
          path="/menu"
          element={isLoggedIn ? <Menu /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<RedirectToHome />} />
      </Routes>
    </div>
  );
}

export default App;
