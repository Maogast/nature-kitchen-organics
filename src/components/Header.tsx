// src/components/Header.tsx
import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"; // Removed FaMusic
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo wrapped in a container */}
        <div className="logo-container">
          <Logo />
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61574450740676" // Replace with your actual Facebook URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/Naturekitchenor" // Replace with your X (Twitter) URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          {/*<a
            href="https://instagram.com/yourprofile" // Replace with your Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>*/}
          <a
            href="https://wa.me/254748423135" // Replace with your WhatsApp Business number
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.youtube.com/@NaturesKitchenorganics" // Replace with your YouTube channel URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://vm.tiktok.com/ZMByLLCKP/" // Replace with your TikTok profile URL
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <img src="/images/tiktok.PNG" alt="TikTok" className="social-icon" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-banner">
        <div className="overlay">
          <h1>Embrace the Natural Essence of Life</h1>
          <p>
            Discover our organic approach to health, nutrition, and a lifestyle rooted in
            nature.
          </p>
          <div className="cta-buttons">
            <Link to="/" className="btn primary">
              Shop Now
            </Link>
            <Link to="/discover" className="btn secondary">
              Discover More
            </Link>
          </div>
        </div>
        {/* Background image is set via CSS */}
      </div>
    </header>
  );
};

export default Header;
