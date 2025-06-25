
import React, { useEffect, useState } from 'react';

interface NumberParticle {
  id: number;
  x: number;
  y: number;
  value: string;
  speed: number;
  opacity: number;
  size: number;
}

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<NumberParticle[]>([]);

  useEffect(() => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '$', '%', '+', '-', '='];
    
    const createParticle = (id: number): NumberParticle => ({
      id,
      x: Math.random() * window.innerWidth,
      y: -50,
      value: numbers[Math.floor(Math.random() * numbers.length)],
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      size: Math.random() * 20 + 10,
    });

    // Initialize particles
    const initialParticles = Array.from({ length: 30 }, (_, i) => createParticle(i));
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
          className="absolute text-primary-green font-mono font-bold select-none"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
            fontSize: `${particle.size}px`,
            transform: 'translateZ(0)',
          }}
        >
          {particle.value}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
