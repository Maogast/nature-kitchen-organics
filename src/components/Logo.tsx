// src/components/Logo.tsx
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img 
        src="/images/logo.png"  // Update with your logo image path
        alt="Nature's Kitchen Organics Logo" 
        className="logo-image" 
      />
    </div>
  );
};

export default Logo;
