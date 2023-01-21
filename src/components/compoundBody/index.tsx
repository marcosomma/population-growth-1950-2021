import { ReactElement } from "react";
import { Group } from "three";
import { useCompoundBody } from "@react-three/cannon";
import { Html } from "@react-three/drei";

interface boxProps {
  rotation?: number[];
  position?: number[];
  color: string;
  transmission: number;
  index: number;
  show: boolean;
}

function CompoundBody(props: boxProps): ReactElement {
  console.log("props", props);
  const [ref] = useCompoundBody<Group>((): any => ({
    mass: 1e3,
    position: props.position,
    rotation: props.rotation,
    shapes: [
      {
        type: "Box",
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        args: [1, 1, 1],
      },
      {
        type: "Sphere",
        position: [0.5, 0, 0],
        rotation: [0, 0, 0],
        args: [0.5, 16, 16],
      },
      {
        type: "Sphere",
        position: [-0.5, 0, 0],
        rotation: [0, 0, 0],
        args: [0.5, 16, 16],
      },
      {
        type: "Sphere",
        position: [0, 0.5, 0],
        rotation: [0, 0, 0],
        args: [0.5, 16, 16],
      },
      {
        type: "Sphere",
        position: [0, -0.5, 0],
        rotation: [0, 0, 0],
        args: [0.5, 16, 16],
      },
      {
        type: "Sphere",
        position: [0, 0, 0.5],
        rotation: [0, 0, 0],
        args: [0.5, 16, 16],
      },
      {
        type: "Sphere",
        position: [0, 0, -0.5],
        rotation: [0, 0, 0],
        args: [0.5, 16, 16],
      },
    ],
  }));
  const glassMaterialProps = {
    thickness: 0,
    roughness: 0,
    clearcoat: 0,
    clearcoatRoughness: 0,
    transmission: props.transmission,
    ior: 1.25,
    envMapIntensity: 0,
    color: props.color,
    attenuationTint: props.color,
    attenuationDistance: 0,
  };
  return (
    <group ref={ref}>
      <mesh receiveShadow castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
        {props.show ? (
          <Html distanceFactor={20}>
            <div style={{ color: "#fff", fontSize: 40 }}>{props.index + 1}</div>
          </Html>
        ) : null}
      </mesh>
      <mesh receiveShadow castShadow position={[0.5, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
      </mesh>
      <mesh receiveShadow castShadow position={[-0.5, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
      </mesh>
      <mesh receiveShadow castShadow position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
      </mesh>
      <mesh receiveShadow castShadow position={[0, -0.5, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
      </mesh>
      <mesh receiveShadow castShadow position={[0, 0, 0.5]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
      </mesh>
      <mesh receiveShadow castShadow position={[0, 0, -0.5]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
      </mesh>
    </group>
  );
}

export default CompoundBody;
