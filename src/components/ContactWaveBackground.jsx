import React, { useEffect, useRef } from "react";

export default function ContactWaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    const colors = [
      "#4b6cb7",
      "#182848",
      "#6a5acd",
      "#5f4b8b",
    ];

    const drawWave = (offset, amp, speed, color) => {
      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = color;

      for (let x = 0; x < canvas.width; x++) {
        let y =
          Math.sin((x + t * speed) * 0.01 + offset) * amp +
          canvas.height * 0.5 +
          offset * 20;
        ctx.lineTo(x, y);
      }

      ctx.stroke();
    };

    const animate = () => {
      t += 1;

      ctx.fillStyle = "#0f1122";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawWave(0, 40, 1.4, colors[0]);
      drawWave(1, 45, 1.1, colors[1]);
      drawWave(2, 35, 1.8, colors[2]);
      drawWave(3, 50, 1.2, colors[3]);

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
