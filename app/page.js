"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const constraintsRef = useRef(null);
  const [x, setX] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setX(parseFloat(value));
  };

  const handleDrag = (e, i) => {
    console.log("Box currently at", i.point.x, i.point.y);
  };

  return (
    <div className="h-screen w-full" ref={constraintsRef}>
      <div className="h-1/2 w-full">
        <motion.div
          // initial={{
          //   x: 0,
          // }}
          // animate={{
          //   x,
          // }}
          drag
          dragConstraints={constraintsRef}
          // onDrag={handleDrag}
          onDragEnd={handleDrag}
          className={`w-10 h-10 bg-blue-500`}
          // transition={{ type: "spring" }}
        />
      </div>
      <div>
        <input type="range" onChange={handleChange} value={x}></input>
        <span>{x}</span>
      </div>
    </div>
  );
};

export default Home;
