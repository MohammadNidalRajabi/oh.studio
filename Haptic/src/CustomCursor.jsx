// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'motion/react';
// function CustomCursor() {
//   const items = [
//     {
//       url:"https://framerusercontent.com/images/lNBFLbSj2Gz6nw9x057OJ0PHjg.jpg",
//     },
//       {
//       url:"https://framerusercontent.com/images/nUA1UsPT8UDgSZuuN16RH1549A.jpg",
//     },
//       {
//       url:"https://framerusercontent.com/images/LeG7l4VbkL0SMezZOpOahnE5dg.jpg?scale-down-to=1024",
//     },

//       {
//       url:"https://framerusercontent.com/images/lNBFLbSj2Gz6nw9x057OJ0PHjg.jpg",
//     },
//   ];
//   const [activeItem, setActiveItem] = useState(items[0]);
//   const [width, setWidth] = useState(0);

//   const carousel  = useRef(null);
//   useEffect(() => {
//     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//   }, [carousel]);
//   return (
// <div className="w-full overflow-hidden">
//   <motion.div
//     ref={carousel}
//     drag="x"
//     whileDrag={{ scale: 0.95 }}
//     dragElastic={0.2}
//     dragConstraints={{ right: 0, left: -width }}
//     dragTransition={{ bounceDamping: 30 }}
//     transition={{ duration: 0.2, ease: 'easeInOut' }}
//     className="flex will-change-transform cursor-grab active:cursor-grabbing">
//     {items.slice(0, 8)?.map((itemData, index) => {
//       return (
//         <motion.div className="min-w-[50rem] min-h-[20rem]">
//           <img
//           key={index}
//             src={itemData?.url}
//             width={400}
//             height={300}
//             alt="img"
//             className="w-full h-[80%] object-cover pointer-events-none "
//           />
//           <div className='flex justify-start items-start p-5 gap-5'>
//             <img className='rounded-[8px] w-[50px]' src="https://framerusercontent.com/images/L3XJdzWxxgFgE41HxXll9ic.jpg" alt="" />
//             <div>
//               <h6 className='text-black'>Neon Horizons</h6>
//               <span>Welcome to the cyberscape</span>
//             </div>
//           </div>
//         </motion.div>
//       );
//     })}
//   </motion.div>
// </div>
//   );
// }
// export default CustomCursor;
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


const items = [
  {
    url: "https://framerusercontent.com/images/lNBFLbSj2Gz6nw9x057OJ0PHjg.jpg",
  },
  {
    url: "https://framerusercontent.com/images/nUA1UsPT8UDgSZuuN16RH1549A.jpg",
  },
  {
    url: "https://framerusercontent.com/images/LeG7l4VbkL0SMezZOpOahnE5dg.jpg?scale-down-to=1024",
  },
  {
    url: "https://framerusercontent.com/images/lNBFLbSj2Gz6nw9x057OJ0PHjg.jpg",
  },
];

const CustomCarouselWithDrawer = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const carousel = useRef(null);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <motion.div
          ref={carousel}
          drag="x"
          whileDrag={{ scale: 0.95 }}
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -width }}
          dragTransition={{ bounceDamping: 30 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="flex will-change-transform cursor-grab active:cursor-grabbing">
          {items.slice(0, 8)?.map((itemData, index) => {
            return (
              <motion.div
                onClick={() => handleImageClick(itemData?.url)}
                className="min-w-[50rem] min-h-[20rem]">
                <img
                  key={index}
                  src={itemData?.url}
                  width={400}
                  height={300}
                  alt="img"
                  className="w-full h-[80%] object-cover pointer-events-none "
                />
                <div className='flex justify-start items-start p-5 gap-5'>
                  <img className='rounded-[8px] w-[50px]' src="https://framerusercontent.com/images/L3XJdzWxxgFgE41HxXll9ic.jpg" alt="" />
                  <div>
                    <h6 className='text-black'>Neon Horizons</h6>
                    <span>Welcome to the cyberscape</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className={`drawer ${drawerOpen ? 'open' : ''} `}>
        <div className='flex justify-start items-start p-5 gap-5'>
          <img className='rounded-[8px] w-[50px]' src="https://framerusercontent.com/images/L3XJdzWxxgFgE41HxXll9ic.jpg" alt="" />
          <div>
            <h6 className='text-black'>Neon Horizons</h6>
            <span>Welcome to the cyberscape</span>
          </div>
        </div>
        <button className="close-btn" onClick={closeDrawer}>×</button>
        <hr />
        <div className='p-5'>
          <h2 className='text-xl font-semibold mb-2'>Welcome to the cyberscape.</h2>
          <p>Neon Horizons is a web3 game that fuses immersive storytelling with on-chain strategy to create a unique, player-owned sci-fi universe. From the visual identity to in-game UI and worldbuilding systems, our design work focused on delivering a rich, cinematic experience that feels both intuitive and futuristic — inviting players to explore, trade, and conquer in a decentralized world that evolves with them.</p>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Brand</span>
          <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Product</span>
        </div>
        {selectedImage && (
          <div className="">
            <img src={selectedImage} alt="Selected" className="w-full mb-2" />
            <img src={selectedImage} alt="Selected" className="w-full mb-2" />
            <img src={selectedImage} alt="Selected" className="w-full mb-2" />
            <img src={selectedImage} alt="Selected" className="w-full mb-2" />
            <img src={selectedImage} alt="Selected" className="w-full mb-2" />
            <img src={selectedImage} alt="Selected" className="w-full mb-2" />
            <img src={selectedImage} alt="Selected" className="w-full mb-2" />

          </div>
        )}
      </div>
      {drawerOpen && <div className="drawer-overlay over" onClick={closeDrawer}></div>}
    </>
  );
};

export default CustomCarouselWithDrawer;
