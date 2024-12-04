import React, { useRef, useEffect } from "react";
import { useColorContext } from "../../ContextApiFolder/ColorContext";

const CursorTrail = () => {
  const { colorCode } = useColorContext();

  function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return { r, g, b };
  }
  const { r, g, b } = hexToRgb(colorCode);

  const canvasRef = useRef(null);
  const particlesRef = useRef([]); // To store the particles (tail lines)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // const PARTICLE_COUNT = 3000; // Number of particles
    const PARTICLE_LIFETIME = 1000; // How long particles last
    // const LINE_COLOR = "rgba(0, 255, 0, 0.7)"; // Green with transparency

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.angle = Math.random() * Math.PI * 3; // Random direction
        this.speed = Math.random() * 2 + 1; // Random speed
        this.alpha = 1; // Opacity
        this.life = PARTICLE_LIFETIME; // Lifetime
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.alpha -= 1 / PARTICLE_LIFETIME; // Gradually fade
        this.life--;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - Math.cos(this.angle) * 10,
          this.y - Math.sin(this.angle) * 15
        ); // Draw a short line for each particle
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`;
        ctx.lineWidth = 1;
        ctx.lineHeight = 100;
        ctx.stroke();
        ctx.closePath();
      }
    }

    const createParticles = (x, y) => {
      for (let i = 0; i < 200; i++) {
        particlesRef.current.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      // Update and draw each particle
      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);

        // Remove particles that have expired
        if (particle.life <= 0) {
          particlesRef.current.splice(index, 1);
        }
      });

      requestAnimationFrame(animate); // Loop the animation
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Create particles at the cursor's position
      createParticles(clientX, clientY);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    animate(); // Start animation loop

    // Cleanup event listeners on unmount
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [b, g, r]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100vh",
        position: "absolute",
        inset: 0,
        // Dark background for contrast
      }}></canvas>
  );
};

export default CursorTrail;
