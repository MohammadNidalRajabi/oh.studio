import React, { useEffect } from 'react';
import { motion, useAnimate, stagger } from 'framer-motion';

const circleCount = 5;
const circleWidth = 10;

const CircleRow = ({ direction }) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            '.curve',
            { x: [0, 20, 0], scaleX: [1, 1.2, 1] },
            {
                delay: stagger(0.2),
                repeat: Infinity,
                repeatType: 'loop',
                duration: 0.6,
                ease: 'easeInOut',
            }
        );
    }, [animate]);

    const containerWidth = circleCount * circleWidth;

    return (
        <motion.div
            ref={scope}
            className="absolute top-0 h-full flex"
            style={{
                left: direction === 'left' ? `-${containerWidth}rem` : '100%',
            }}
            animate={{
                left: direction === 'left' ? '100%' : `-${containerWidth}rem`,
            }}
            transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'linear',
            }}
        >
            {Array.from({ length: circleCount }).map((_, i) => (
                <motion.div
                    key={i}
                    className="curve bg-gray-300"
                    style={{
                        width: `${circleWidth}rem`,
                        height: '100%',
                        borderRadius:
                            direction === 'left' ? '0 50% 50% 0' : '50% 0 0 50%',
                        marginRight: direction === 'left' ? '0' : '0.25rem',
                        marginLeft: direction === 'right' ? '0' : '0.25rem',
                    }}
                />
            ))}
        </motion.div>
    );
};

const MovingCurvedCircles = () => {
    return (
        <div className="relative w-full h-80 overflow-hidden bg-black">
            <CircleRow direction="left" />
            <CircleRow direction="right" />
        </div>
    );
};

export default MovingCurvedCircles;
