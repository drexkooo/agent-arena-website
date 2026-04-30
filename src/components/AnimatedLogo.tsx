import { motion } from "motion/react";
import imgImage16 from "@/assets/d4608accddcd4e19b756b5b6ee31dc1c7757f207.png";
import imgImage15 from "@/assets/e07a600d5452b84a763f95f182af567f177f11b0.png";
import imgImage14 from "@/assets/2c1d78e031c720d95a1464f037de4de9cdcbaeb2.png";
import imgImage13 from "@/assets/8fff3a280ee97a64ca9d469ea8fe431a0b6cac52.png";

type Props = { scale?: number };

export function AnimatedLogo({ scale = 0.12 }: Props) {
  const W = 1366;
  const H = 742;
  return (
    <div
      className="relative"
      style={{
        width: W * scale,
        height: H * scale,
      }}
    >
      <div
        className="relative"
        style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        <motion.div
          className="absolute h-[260.509px] left-0 rounded-[470px] top-[273.19px] w-[271.176px]"
          initial={false}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[470px]">
            <img
              alt=""
              className="absolute h-[393.08%] left-[-42.31%] max-w-none top-[-142.04%] w-[566.42%]"
              src={imgImage15.src}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute h-[261.001px] left-[82.64px] top-[31.56px] w-[1061.031px]"
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgImage13.src} />
        </motion.div>

        <motion.div
          className="absolute h-[149.09px] left-[275.05px] top-[250.95px] w-[794.436px]"
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[686.83%] left-[-49.35%] max-w-none top-[-234.18%] w-[193.34%]"
              src={imgImage15.src}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute h-[238.884px] left-[100.91px] top-[503.74px] w-[1030.788px]"
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgImage14.src} />
        </motion.div>

        <motion.div
          className="absolute h-[171.855px] left-[232.31px] top-[400.04px] w-[977.819px]"
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          <img alt="Agent Arena" className="absolute block inset-0 max-w-none size-full" src={imgImage16.src} />
        </motion.div>

        {[
          { size: 25, left: 1050, top: 150, delay: 0, light: true },
          { size: 35, left: 1100, top: 170, delay: 0.2, light: false },
          { size: 20, left: 1150, top: 160, delay: 0.4, light: true },
          { size: 40, left: 1180, top: 200, delay: 0.6, light: false },
          { size: 30, left: 1100, top: 230, delay: 0.8, light: false },
          { size: 28, left: 1200, top: 260, delay: 1.0, light: true },
          { size: 22, left: 1250, top: 240, delay: 1.2, light: true },
          { size: 32, left: 1230, top: 290, delay: 1.4, light: false },
          { size: 26, left: 1270, top: 280, delay: 1.6, light: true },
          { size: 35, left: 1290, top: 315, delay: 1.8, light: false },
          { size: 24, left: 1320, top: 300, delay: 2.0, light: true },
        ].map((square, i) => (
          <motion.div
            key={i}
            className="absolute rounded-lg border-2 border-[#60B5E8]"
            style={{
              width: square.size,
              height: square.size,
              left: square.left,
              top: square.top,
              background: square.light
                ? "linear-gradient(135deg, #F0F9FF 0%, #BFDBFE 50%, #93C5FD 100%)"
                : "linear-gradient(135deg, #DDF4FF 0%, #93DDFD 50%, #60B5E8 100%)",
            }}
            animate={{
              x: [0, 50],
              y: [0, -50],
              opacity: [0, 1, 1, 0],
              scale: [0.4, 1.1, 1.1, 0.4],
            }}
            transition={{
              duration: 2.5,
              delay: 1.5 + square.delay,
              repeat: Infinity,
              repeatDelay: 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
