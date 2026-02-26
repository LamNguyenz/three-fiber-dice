import { Environment, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Dice } from "./components/Dice";
import { NeonButton } from "./components/NeonButton";

function App() {
  return (
    <Canvas className="canvas">
      <ambientLight intensity={0.4} />
      <pointLight position={[-3, -2, 2]} intensity={1.5} />
      <rectAreaLight
        width={4}
        height={4}
        intensity={6}
        position={[2, 2, 3]}
        lookAt={[0, 0, 0]}
      />
      <Dice position={[0, 0, 0]} />

      <Html position={[0, -1.77, 0]} center>
        <NeonButton />
      </Html>
      <Environment preset="studio" />
    </Canvas>
  );
}

export default App;
