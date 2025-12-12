import '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    // This extends the default Three.js elements
  }
}

// Ensure R3F types are properly recognized
export {};
