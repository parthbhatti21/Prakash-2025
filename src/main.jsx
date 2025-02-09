import React, { Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Rive } from "@rive-app/canvas";

const App = React.lazy(() => import("./App.jsx"));

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    if (!canvas) return;

    const r = new Rive({
      src: "Load-in.riv",
      canvas: canvas,
      autoplay: true,
      stateMachines: "State Machine 1",
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
    });

    const timer = setTimeout(onFinish, 3000); // Show loading screen for at least 4 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <div className="loader"></div>
      <canvas id="canvas"></canvas>
      <p>Loading...</p>
    </div>
  );
};

const RootComponent = () => {
  const [loading, setLoading] = useState(true);
  const [showRive, setShowRive] = useState(true);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setShowRive(false), 500); // Small delay to ensure smooth transition
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {showRive && <canvas id="canvas"></canvas>}{" "}
      {/* Ensuring Rive stays visible */}
      {!loading && <App />}
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<LoadingScreen onFinish={() => {}} />}>
    <RootComponent />
  </Suspense>
);

// CSS Variables
const styles = document.createElement("style");
styles.innerHTML = `
  :root {
    --loading-bg: #f4f4f4;
    --loading-text-color: #333;
    --canvas-size: 300px;
  }

  .loading-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: var(--loading-bg);
  }

  p {
    color: var(--loading-text-color);
    font-size: 1.2rem;
    margin-top: 10px;
  }

  canvas {
    width: var(--canvas-size);
    height: var(--canvas-size);
  }
`;
document.head.appendChild(styles);
