import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { ASSETS } from "../assets/assets";

interface BookMockupProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BookMockup({
  className = "",
  size = "lg",
}: BookMockupProps) {
  const shouldReduceMotion = useReducedMotion();

  const sizeClasses = {
    sm: "w-[190px] sm:w-[230px]",
    md: "w-[240px] sm:w-[290px]",
    lg: "w-[270px] sm:w-[340px] md:w-[390px]",
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center select-none py-2 px-4 ${className}`}
    >
      {/* 1. Swaying Floating Book */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -12, 1, -9, 0],
                rotate: [-2.4, 2.4, -1.5, 1.8, -2.4],
                rotateY: [-3, 3, -1.5, 2, -3],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        className={`relative z-10 ${sizeClasses[size]} cursor-pointer`}
      >
        {/* Transparent PNG Book Cutout with silhouette drop-shadow */}
        <img
          src={ASSETS.ebookCover}
          alt="Margaret's Little Guide to Everyday Wellness - Official 3D E-Book Cover"
          className="w-full h-auto block select-none pointer-events-none filter drop-shadow-[0_20px_25px_rgba(40,32,20,0.30)] drop-shadow-[0_8px_12px_rgba(40,32,20,0.18)]"
          loading="eager"
          draggable={false}
        />
      </motion.div>

      {/* 2. Soft Organic Floor Shadow that sways and breathes in sync with the book */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scaleX: [1, 0.88, 1.03, 0.92, 1],
                scaleY: [1, 0.82, 1.05, 0.86, 1],
                opacity: [0.38, 0.22, 0.42, 0.26, 0.38],
                x: ["-50%", "-48%", "-52%", "-49%", "-50%"],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="absolute -bottom-1 sm:-bottom-2 left-1/2 w-[68%] h-6 sm:h-7 bg-[#2E281D] rounded-[100%] blur-md sm:blur-lg pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
