// src/App.tsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";

// Dynamic imports for pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage"));
const AboutUs3D = React.lazy(() => import("./pages/AboutUs3D"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          {/* Suspense fallback for lazy-loaded components */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<AboutUs3D />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;
