
import React, { useEffect, useState } from 'react';

interface NumberParticle {
  id: number;
  x: number;
  y: number;
  value: string;
  speed: number;
  opacity: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<NumberParticle[]>([]);

  useEffect(() => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '$', '%', '+', '-', '=', '₹', '💰', '📈', '💸'];
    const colors = ['#02ee61', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#fd79a8', '#00cec9'];
    
    const createParticle = (id: number): NumberParticle => ({
      id,
      x: Math.random() * window.innerWidth,
      y: -50,
      value: numbers[Math.floor(Math.random() * numbers.length)],
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      size: Math.random() * 30 + 15,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 4,
    });

    // Initialize particles
    const initialParticles = Array.from({ length: 40 }, (_, i) => createParticle(i));
    setParticles(initialParticles);

    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          if (particle.y > window.innerHeight + 50) {
            return createParticle(particle.id);
          }
          return {
            ...particle,
            y: particle.y + particle.speed,
            rotation: particle.rotation + particle.rotationSpeed,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute font-mono font-bold select-none animate-pulse"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
            fontSize: `${particle.size}px`,
            color: particle.color,
            transform: `translateZ(0) rotate(${particle.rotation}deg)`,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 0 8px currentColor)',
          }}
        >
          {particle.value}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
