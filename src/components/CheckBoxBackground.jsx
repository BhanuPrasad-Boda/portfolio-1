
import React, { useEffect, useRef } from "react";

const CheckboxBackground = () => {
  const canvasRef = useRef(null);
  const boxes = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    
    const boxCount = 50; 
    boxes.current = Array.from({ length: boxCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 15 + Math.random() * 20,
      speedX: 0.5 + Math.random() * 0.5,
      speedY: 0.5 + Math.random() * 0.5,
      color: `rgba(255, 255, 255, ${0.3 + Math.random() * 0.3})`, 
    }));

    const drawCheckbox = (ctx, x, y, size, color) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, size, size);

      
      ctx.beginPath();
      ctx.moveTo(x + size * 0.2, y + size * 0.5);
      ctx.lineTo(x + size * 0.45, y + size * 0.75);
      ctx.lineTo(x + size * 0.8, y + size * 0.25);
      ctx.stroke();
    };

    const animate = () => {
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#31416bff"); 
      gradient.addColorStop(0.5, "#5b75a2ff"); 
      gradient.addColorStop(1, "#31416bff"); 
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      boxes.current.forEach(box => {
        drawCheckbox(ctx, box.x, box.y, box.size, box.color);

        
        box.x += box.speedX;
        box.y += box.speedY;

        
        if (box.x > canvas.width + box.size) box.x = -box.size;
        if (box.y > canvas.height + box.size) box.y = -box.size;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
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
};

export default CheckboxBackground;
