import React, { Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Rive } from "@rive-app/canvas";

const App = React.lazy(() => import("./App.jsx"));

const LoadingScreen = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    if (!canvas) return;

    const r = new Rive({
      src: "/Load-in.riv",
      canvas: canvas,
      autoplay: true,
      stateMachines: "State Machine 1",
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
    });
  }, []);

  return (
    <div className="loading-screen">
      <div className="loader"></div>
      <p>Loading...</p>
      <canvas id="canvas"></canvas>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<LoadingScreen />}>
    <App />
  </Suspense>
);
