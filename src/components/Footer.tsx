// Footer.tsx
import React from "react";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} Nature's Kitchen Organics. All rights reserved.</p>
      {/* Additional footer content can be added here */}
    </div>
  </footer>
);

export default Footer;
