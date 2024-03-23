"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card } from "./(components)/Card";

const Home = () => {
  const constraintsRef = useRef(null);
  const [x, setX] = useState(0);
  const [stack, setStack] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setX(parseFloat(value));
  };

  const handleDrag = (e, i) => {
    console.log("Box currently at", i.point.x, i.point.y);
  };

  return (
    <div className="h-screen w-full">
      <div className="h-1/2 w-full my-10 flex justify-center">
        <div className="w-[200px] relative" ref={constraintsRef}>
          <motion.div
            initial={{
              rotate: 0,
            }}
            drag="x"
            dragConstraints={constraintsRef}
            // onDrag={handleDrag}
            onDragEnd={handleDrag}
            whileTap={{ scale: 1.1 }}
            className={`w-[200px] h-full bg-white rounded-3xl shadow-lg grid items-center absolute z-30`}
            // transition={{ type: "spring" }}
          >
            <span className="text-black text-center text-8xl">🧁</span>
          </motion.div>
          <div
            className={`w-[200px] h-full bg-white rounded-3xl shadow-lg grid items-center rotate-3 absolute z-20`}
          >
            <span className="text-black text-center text-8xl ">🍎</span>
          </div>
          <div
            className={`w-[200px] h-full bg-white rounded-3xl shadow-lg grid items-center rotate-6 absolute z-10`}
          >
            <span className="text-black text-center text-8xl ">🥞</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
