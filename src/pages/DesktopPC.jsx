import { useGLTF } from "@react-three/drei";
import { useFrame} from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const DesktopPC = () => {
  const model = useGLTF("/desktop_pc/scene.gltf");
  const ref = useRef();

  // Base rotation (important!)
  const baseRotation = useRef({
    x: -0.01,
    y: -1.55,
    z: -0.1,
  });

useFrame(({ mouse,invalidate }) => {
  if (!ref.current) return;
  invalidate();
  const mx = mouse?.x ?? 0;
  const my = mouse?.y ?? 0;

  const offsetY = mx * 0.06;
  const offsetX = my * 0.04;

  ref.current.rotation.y = THREE.MathUtils.lerp(
    ref.current.rotation.y,
    baseRotation.current.y + offsetY,
    0.09
  );

  ref.current.rotation.x = THREE.MathUtils.lerp(
    ref.current.rotation.x,
    baseRotation.current.x + offsetX,
    0.09
  );
});


  return (
    <>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[1, 5, -1.8]}
        angle={0.12}
        penumbra={1}
        intensity={10}
      />
      <pointLight intensity={5} />

      <primitive
        ref={ref}
        object={model.scene}
        scale={0.75}
        position={[1, -1.9, -1.8]}
        rotation={[-0.01, -1.55, -0.1]}
      />
    </>
  );
};

export default DesktopPC;
