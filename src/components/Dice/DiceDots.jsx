import * as THREE from "three";

const DOT_RADIUS = 0.12;
const FACE = 0.76;
const A = 0.3;
const C = 0;

const pipMaterial = (
  <meshStandardMaterial
    color="#ffffff"
    emissive="#7df9ff"
    emissiveIntensity={3}
    roughness={0.2}
    side={THREE.DoubleSide}
  />
);

const PIPS = {
  1: [[C, C]],
  2: [
    [-A, -A],
    [A, A],
  ],
  3: [
    [-A, -A],
    [C, C],
    [A, A],
  ],
  4: [
    [-A, -A],
    [-A, A],
    [A, -A],
    [A, A],
  ],
  5: [
    [-A, -A],
    [-A, A],
    [C, C],
    [A, -A],
    [A, A],
  ],
  6: [
    [-A, -A],
    [-A, C],
    [-A, A],
    [A, -A],
    [A, C],
    [A, A],
  ],
};

const faces = [
  { axis: "z", dir: +1, value: 1, rot: [0, 0, 0] },
  { axis: "z", dir: -1, value: 6, rot: [0, Math.PI, 0] },
  { axis: "x", dir: +1, value: 3, rot: [0, -Math.PI / 2, 0] },
  { axis: "x", dir: -1, value: 4, rot: [0, Math.PI / 2, 0] },
  { axis: "y", dir: +1, value: 5, rot: [-Math.PI / 2, 0, 0] },
  { axis: "y", dir: -1, value: 2, rot: [Math.PI / 2, 0, 0] },
];

export function DiceDots() {
  return (
    <>
      {faces.flatMap((f, fi) =>
        PIPS[f.value].map(([u, v], i) => {
          const pos = [0, 0, 0];

          if (f.axis === "z") {
            pos[0] = u;
            pos[1] = v;
            pos[2] = f.dir * FACE;
          }

          if (f.axis === "x") {
            pos[0] = f.dir * FACE;
            pos[1] = v;
            pos[2] = u;
          }

          if (f.axis === "y") {
            pos[0] = u;
            pos[1] = f.dir * FACE;
            pos[2] = v;
          }

          return (
            <mesh key={`${fi}-${i}`} position={pos} rotation={f.rot}>
              <circleGeometry args={[DOT_RADIUS, 32]} />
              {pipMaterial}
            </mesh>
          );
        }),
      )}
    </>
  );
}
