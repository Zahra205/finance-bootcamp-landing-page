
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
  direction: 'up' | 'down' | 'left' | 'right' | 'diagonal';
  animationType: 'float' | 'bounce' | 'spiral' | 'zigzag';
}

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<NumberParticle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const numbers = [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      '$', '₹', '€', '£', '¥', '%', '+', '-', '=', '×', '÷',
      '💰', '💸', '📈', '📊', '💎', '🏆', '🚀', '⭐', '💯', '🔥',
      '₿', '∞', '∑', '∆', '∂', '∫', '≈', '≠', '≤', '≥'
    ];
    
    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b',
      '#eb4d4b', '#6c5ce7', '#fd79a8', '#00cec9', '#02ee61',
      '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43',
      '#ee5a24', '#0abde3', '#10ac84', '#f368e0', '#3742fa'
    ];

    const directions = ['up', 'down', 'left', 'right', 'diagonal'] as const;
    const animationTypes = ['float', 'bounce', 'spiral', 'zigzag'] as const;
    
    const createParticle = (id: number): NumberParticle => {
      const direction = directions[Math.floor(Math.random() * directions.length)];
      let startX, startY;
      
      switch (direction) {
        case 'up':
          startX = Math.random() * dimensions.width;
          startY = dimensions.height + 50;
          break;
        case 'down':
          startX = Math.random() * dimensions.width;
          startY = -50;
          break;
        case 'left':
          startX = dimensions.width + 50;
          startY = Math.random() * dimensions.height;
          break;
        case 'right':
          startX = -50;
          startY = Math.random() * dimensions.height;
          break;
        default:
          startX = Math.random() * dimensions.width;
          startY = Math.random() * dimensions.height;
      }

      return {
        id,
        x: startX,
        y: startY,
        value: numbers[Math.floor(Math.random() * numbers.length)],
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        size: Math.random() * 40 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 6,
        direction,
        animationType: animationTypes[Math.floor(Math.random() * animationTypes.length)]
      };
    };

    // Create more particles for better coverage
    const initialParticles = Array.from({ length: 80 }, (_, i) => createParticle(i));
    setParticles(initialParticles);

    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x;
          let newY = particle.y;
          let newRotation = particle.rotation + particle.rotationSpeed;

          // Apply different movement patterns based on animation type
          switch (particle.animationType) {
            case 'float':
              switch (particle.direction) {
                case 'up':
                  newY -= particle.speed;
                  newX += Math.sin(Date.now() * 0.001 + particle.id) * 0.5;
                  break;
                case 'down':
                  newY += particle.speed;
                  newX += Math.sin(Date.now() * 0.001 + particle.id) * 0.5;
                  break;
                case 'left':
                  newX -= particle.speed;
                  newY += Math.sin(Date.now() * 0.001 + particle.id) * 0.5;
                  break;
                case 'right':
                  newX += particle.speed;
                  newY += Math.sin(Date.now() * 0.001 + particle.id) * 0.5;
                  break;
                case 'diagonal':
                  newX += particle.speed * Math.cos(particle.id);
                  newY += particle.speed * Math.sin(particle.id);
                  break;
              }
              break;

            case 'bounce':
              newX += particle.speed * Math.cos(Date.now() * 0.005 + particle.id);
              newY += particle.speed * Math.sin(Date.now() * 0.005 + particle.id);
              break;

            case 'spiral':
              const spiralRadius = 50 + Math.sin(Date.now() * 0.001 + particle.id) * 30;
              newX += Math.cos(Date.now() * 0.01 + particle.id) * spiralRadius * 0.02;
              newY += Math.sin(Date.now() * 0.01 + particle.id) * spiralRadius * 0.02;
              break;

            case 'zigzag':
              newX += particle.speed;
              newY += Math.sin(newX * 0.02) * 3;
              break;
          }

          // Reset particle if it goes off screen
          if (newX < -100 || newX > dimensions.width + 100 || 
              newY < -100 || newY > dimensions.height + 100) {
            return createParticle(particle.id);
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            rotation: newRotation,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 32); // ~30fps for smooth animation
    return () => clearInterval(interval);
  }, [dimensions]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute font-mono font-bold select-none transition-all duration-100"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
            fontSize: `${particle.size}px`,
            color: particle.color,
            transform: `translateZ(0) rotate(${particle.rotation}deg) scale(${1 + Math.sin(Date.now() * 0.003 + particle.id) * 0.2})`,
            textShadow: `
              0 0 10px ${particle.color}40,
              0 0 20px ${particle.color}30,
              0 0 30px ${particle.color}20,
              2px 2px 4px rgba(0,0,0,0.5)
            `,
            filter: `
              drop-shadow(0 0 15px ${particle.color}) 
              hue-rotate(${Math.sin(Date.now() * 0.001) * 30}deg)
            `,
            animation: `
              ${particle.animationType === 'bounce' ? 'bounce' : 'none'} 
              ${2 + Math.random() * 2}s 
              infinite alternate ease-in-out
            `,
          }}
        >
          {particle.value}
        </div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
