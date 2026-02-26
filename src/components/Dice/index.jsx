import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { DiceDots } from "./DiceDots";
import { useDiceStore } from "../../store/useDiceStore";
import { useEffect } from "react";

const FACE_ROTATIONS = {
  1: [0, 0, 0],
  2: [Math.PI / 2, 0, 0],
  3: [0, 0, -Math.PI / 2],
  4: [0, 0, Math.PI / 2],
  5: [-Math.PI / 2, 0, 0],
  6: [Math.PI, 0, 0],
};

function randomQuarterTurns() {
  const q = Math.PI / 2;
  return [
    Math.floor(Math.random() * 4) * q,
    Math.floor(Math.random() * 4) * q,
    Math.floor(Math.random() * 4) * q,
  ];
}

export function Dice(props) {
  const { rolling, stopRoll } = useDiceStore();
  const ref = useRef(null);

  const startRot = useRef(new THREE.Euler());
  const endRot = useRef(new THREE.Euler());
  const progress = useRef(null);

  function rollDice() {
    const face = Math.floor(Math.random() * 6) + 1;

    const [fx, fy, fz] = FACE_ROTATIONS[face];
    const [rx, ry, rz] = randomQuarterTurns();

    startRot.current.copy(ref.current.rotation);

    endRot.current.set(
      fx + rx + Math.PI * 4,
      fy + ry + Math.PI * 4,
      fz + rz + Math.PI * 4,
    );

    progress.current = 0;
  }

  useFrame((_, delta) => {
    if (!rolling) return;

    progress.current += delta / 1.8; // duration in seconds
    const t = Math.min(progress.current, 1);

    const eased = 1 - Math.pow(1 - t, 3);

    ref.current.rotation.x = THREE.MathUtils.lerp(
      startRot.current.x,
      endRot.current.x,
      eased,
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      startRot.current.y,
      endRot.current.y,
      eased,
    );
    ref.current.rotation.z = THREE.MathUtils.lerp(
      startRot.current.z,
      endRot.current.z,
      eased,
    );

    if (t === 1) stopRoll();
  });

  useEffect(() => {
    if (rolling) {
      rollDice();
    }
  }, [rolling]);

  return (
    <group ref={ref}>
      <RoundedBox args={[1.5, 1.5, 1.5]} radius={0.2} smoothness={6} {...props}>
        <meshPhysicalMaterial
          color="#083870"
          roughness={0.2}
          metalness={0.2}
          clearcoat={0.2}
          clearcoatRoughness={0.05}
          envMapIntensity={3}
        />
      </RoundedBox>
      <DiceDots />
    </group>
  );
}
