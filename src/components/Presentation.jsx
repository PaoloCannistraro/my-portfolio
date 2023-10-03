import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import CenterPage from "./CenterPage";

function Presentation() {
  const x = useMotionValue(3000);
  const y = useMotionValue(3000);

  const rotateX = useTransform(y, [0, 400], [0, -2]);
  const rotateY = useTransform(x, [0, 400], [-2, 0]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  return (
    <motion.div
      style={{
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        perspective: 400,
      }}
      onMouseMove={handleMouse}
    >
      <motion.div
        style={{
          borderRadius: 30,
          rotateX,
          rotateY,
        }}
      >
        <div className="font">
          <div className="inside">Hello</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default Presentation;
