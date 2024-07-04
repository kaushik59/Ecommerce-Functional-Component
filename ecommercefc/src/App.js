import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider'; 
import { CartProvider } from './components/CartContext'; 
import ProtectedRoute from './components/ProtectedRoute'; 
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Products from './components/Products';
import ProductItemDetails from './components/ProductItemDetails';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import SignupForm from './components/SignupForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route
              path="/"
              element={
                <ProtectedRoute element={<Home />} />
              }
            />
            <Route
              path="/products"
              element={
                <ProtectedRoute element={<Products />} />
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProtectedRoute element={<ProductItemDetails />} />
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute element={<Cart />} />
              }
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
