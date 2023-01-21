import React, { ReactElement, useRef, useState } from "react";
import { Mesh, Euler, Vector3, Color } from "three";
import { useFrame } from "@react-three/fiber";

interface boxProps {
  rotation?: Euler;
  position?: Vector3;
  color?: Color;
  wireframe?: boolean;
  reverseRotation?: boolean;
  animated?: boolean;
}

function Box(props: boxProps): ReactElement {
  const [active, setActive] = useState(false);
  const ref = useRef<Mesh>(null!);
  useFrame(({ clock }) => {
    if (props.animated) {
      ref.current.setRotationFromEuler(
        new Euler(
          props.reverseRotation ? clock.getElapsedTime() : -clock.getElapsedTime(),
          props.reverseRotation ? -clock.getElapsedTime() : -clock.getElapsedTime(),
          props.reverseRotation ? clock.getElapsedTime() : -clock.getElapsedTime()
        )
      );
    }
  });

  return (
    <mesh
      castShadow
      receiveShadow
      {...props}
      ref={props.animated ? ref : null}
      scale={active ? 2.8 : 2}
      onClick={() => setActive(!active)}
    >
      <boxGeometry args={[2,2,2]}/>
      <meshStandardMaterial metalness={1}
        color={active && !props.wireframe ? 0x222222 : props.color}
        wireframe={props.wireframe}
      />
    </mesh>
  );
}

export default Box;
