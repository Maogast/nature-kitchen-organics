// src/AboutUs3D.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const AboutUs3D: React.FC = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw' }}>
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 10] }}>
        {/* Lighting Setup */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} />
        
        {/* 3D Text representing your brand name */}
        <Text
          color="#2c3e50"
          fontSize={2}
          position={[0, 2, 0]}
          anchorX="center"
          anchorY="middle"
        >
          Nature's Kitchen Organics
        </Text>

        {/* Additional 3D Elements */}
        <mesh position={[-2, -1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#8e44ad" />
        </mesh>
        <mesh position={[2, -1, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#e74c3c" />
        </mesh>

        {/* OrbitControls for interactive user control */}
        <OrbitControls />
      </Canvas>

      {/* Overlay Content */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          width: '100%',
          textAlign: 'center',
          color: '#34495e',
          padding: '0 20px',
        }}
      >
        <h2>About Us</h2>
        <p>
        At Nature's Kitchen Organics, we are passionate about mindful living. We provide high-quality organic products that honor nature and nurture both body and soul.
        </p>
        
        {/* Key Values */}
        <div style={{ marginTop: '30px', textAlign: 'left' }}>
          <h3>Our Values</h3>
          <ul>
            <li>🌱 Sustainable Practices</li>
            <li>💚 Ethical Sourcing</li>
            <li>🌍 Commitment to Quality</li>
          </ul>
        </div>

        {/* Team Members */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
          <div style={{ margin: '10px 100px', textAlign: 'center' }}>
            <img src="/images/mocha.PNG" alt="Sacalivin Mocha" style={{ width: '150px', borderRadius: '50%' }} />
            <h3>Sacalivin Mocha</h3>
            <p>Founder</p>
          </div>
          <div style={{ margin: '10px 100px', textAlign: 'center' }}>
            <img src="/images/steve.PNG" alt="Stephen Magare" style={{ width: '150px', borderRadius: '50%' }} />
            <h3>Stephen Magare</h3>
            <p>Co-Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs3D;
