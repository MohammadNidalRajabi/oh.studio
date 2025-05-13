import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Card from './Card';

const images = [
  {
    title: "Playmind",
    subtitle:"Your gaming AI companion",
    icon: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjUiPjxwYXRoIGQ9Ik0gMTMuNzU1IDI0LjQ4NSBMIDE4Ljg3IDE5LjM3IEwgMTEuOTI5IDE5LjM3IEwgMTEuOTI5IDI0LjQ4NSBaIiBmaWxsPSJyZ2IoMCwwLDApIj48L3BhdGg+PHBhdGggZD0iTSAyNCA1LjYzIEwgMTguODcgNS42MyBMIDE4Ljg3IDE5LjM3IEwgMjQgMTQuMjQgWiIgZmlsbD0icmdiKDAsMCwwKSI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTAuMjQ1IDAuNTE2IEwgNS4xMyA1LjYzIEwgMTIuMDcxIDUuNjMgTCAxMi4wNzEgMC41MTYgWiIgZmlsbD0icmdiKDAsMCwwKSI+PC9wYXRoPjxwYXRoIGQ9Ik0gMCAxOS4zNyBMIDUuMTMgMTkuMzcgTCA1LjEzIDUuNjMgTCAwIDEwLjc2MSBaIiBmaWxsPSJyZ2IoMCwwLDApIj48L3BhdGg+PC9zdmc+",
    img:"",
    video:"https://framerusercontent.com/assets/aoofKYrlWkJ4mNep1SL1VxZuYIw.mp4",
  },

   {
    title: "Playmind",
    subtitle:"Your gaming AI companion",
    icon: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjUiPjxwYXRoIGQ9Ik0gMTMuNzU1IDI0LjQ4NSBMIDE4Ljg3IDE5LjM3IEwgMTEuOTI5IDE5LjM3IEwgMTEuOTI5IDI0LjQ4NSBaIiBmaWxsPSJyZ2IoMCwwLDApIj48L3BhdGg+PHBhdGggZD0iTSAyNCA1LjYzIEwgMTguODcgNS42MyBMIDE4Ljg3IDE5LjM3IEwgMjQgMTQuMjQgWiIgZmlsbD0icmdiKDAsMCwwKSI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTAuMjQ1IDAuNTE2IEwgNS4xMyA1LjYzIEwgMTIuMDcxIDUuNjMgTCAxMi4wNzEgMC41MTYgWiIgZmlsbD0icmdiKDAsMCwwKSI+PC9wYXRoPjxwYXRoIGQ9Ik0gMCAxOS4zNyBMIDUuMTMgMTkuMzcgTCA1LjEzIDUuNjMgTCAwIDEwLjc2MSBaIiBmaWxsPSJyZ2IoMCwwLDApIj48L3BhdGg+PC9zdmc+",
    img:"",
    video:"https://framerusercontent.com/assets/l4LJpojRh0zlBunr2WIbUIV2ls.mp4",
  },

   {
    title: "Playmind",
    subtitle:"Your gaming AI companion",
    icon: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjUiPjxwYXRoIGQ9Ik0gMTMuNzU1IDI0LjQ4NSBMIDE4Ljg3IDE5LjM3IEwgMTEuOTI5IDE5LjM3IEwgMTEuOTI5IDI0LjQ4NSBaIiBmaWxsPSJyZ2IoMCwwLDApIj48L3BhdGg+PHBhdGggZD0iTSAyNCA1LjYzIEwgMTguODcgNS42MyBMIDE4Ljg3IDE5LjM3IEwgMjQgMTQuMjQgWiIgZmlsbD0icmdiKDAsMCwwKSI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTAuMjQ1IDAuNTE2IEwgNS4xMyA1LjYzIEwgMTIuMDcxIDUuNjMgTCAxMi4wNzEgMC41MTYgWiIgZmlsbD0icmdiKDAsMCwwKSI+PC9wYXRoPjxwYXRoIGQ9Ik0gMCAxOS4zNyBMIDUuMTMgMTkuMzcgTCA1LjEzIDUuNjMgTCAwIDEwLjc2MSBaIiBmaWxsPSJyZ2IoMCwwLDApIj48L3BhdGg+PC9zdmc+",
    img:"https://framerusercontent.com/images/zeucxu6AYbf2t0iR4MZYOD4ams.jpg?scale-down-to=1024",
    video:"https://framerusercontent.com/assets/l4LJpojRh0zlBunr2WIbUIV2ls.mp4",
  },

   {
    title: "Playmind",
    subtitle:"Your gaming AI companion",
    icon: "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMjUiPjxwYXRoIGQ9Ik0gMTMuNzU1IDI0LjQ4NSBMIDE4Ljg3IDE5LjM3IEwgMTEuOTI5IDE5LjM3IEwgMTEuOTI5IDI0LjQ4NSBaIiBmaWxsPSJyZ2IoMCwwLDApIj48L3BhdGg+PHBhdGggZD0iTSAyNCA1LjYzIEwgMTguODcgNS42MyBMIDE4Ljg3IDE5LjM3IEwgMjQgMTQuMjQgWiIgZmlsbD0icmdiKDAsMCwwKSI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTAuMjQ1IDAuNTE2IEwgNS4xMyA1LjYzIEwgMTIuMDcxIDUuNjMgTCAxMi4wNzEgMC41MTYgWiIgZmlsbD0icmdiKDAsMCwwKSI+PC9wYXRoPjxwYXRoIGQ9Ik0gMCAxOS4zNyBMIDUuMTMgMTkuMzcgTCA1LjEzIDUuNjMgTCAwIDEwLjc2MSBaIiBmaWxsPSJyZ2IoMCwwLDApIj48L3BhdGg+PC9zdmc+",
    img:"",
    video:"https://framerusercontent.com/assets/zOUq2FSvLWRxQVC4aZIyzZ6I.mp4",
  },
  
];

const loopImages = [...images, ...images, ...images, ...images]; // Duplicate for smooth looping

function Carousel() {
  const x = useMotionValue(0);
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const speed = 50; // pixels per second

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = (time - previousTimeRef.current) / 1000; // seconds
      x.set(x.get() - speed * deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    requestRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    cancelAnimationFrame(requestRef.current);
    previousTimeRef.current = undefined;
  };

  useEffect(() => {
    startAnimation();
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="carousel-wrapper overflow-hidden">
      <motion.div
        className="carousel-track flex"
        style={{ x }}
        onMouseOver={stopAnimation}
        onMouseLeave={startAnimation}
        
      >
        {loopImages.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            img={item.img}
            video={item.video}
          />
        ))}
      </motion.div>
    </div>
  );
}
export default Carousel;
