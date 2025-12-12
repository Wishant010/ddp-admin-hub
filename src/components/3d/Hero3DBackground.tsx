import { Suspense, lazy } from "react";

// Lazy load the 3D component for better performance
const FloatingShapes = lazy(() => import("./FloatingShapes"));

export default function Hero3DBackground() {
  return (
    <Suspense fallback={null}>
      <FloatingShapes />
    </Suspense>
  );
}
