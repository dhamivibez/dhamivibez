import { useState, useEffect } from 'react';

const Background = ({ count = 10 }) => {
  const [stars, setStars] = useState<{ top: string; left: string; angle: number; duration: string; delay: string }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: count }, (_, _i) => {
      const top = `${Math.random() * 70}vh`;
      const left = `${Math.random() * 60}vw`;
      const angle = -300 - Math.random() * 40;
      const duration = `${4 + Math.random() * 5}s`;
      const delay = `${Math.random() * 5}s`;

      return {
        top,
        left,
        angle,
        duration,
        delay,
      };
    });

    setStars(generatedStars);
  }, [count]); // Only regenerate when `count` changes

  return (
    <>
      <div className="bg-space"></div>
      <div className="pointer-events-none fixed inset-0 z-[-1]">
        {stars.map((star, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              transform: `rotate(${star.angle}deg)`,
              animationDuration: star.duration,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Background;
