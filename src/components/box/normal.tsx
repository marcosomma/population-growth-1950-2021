import { ReactElement, useRef } from "react";
import { Euler, Vector3 } from "three";

interface boxProps {
  rotation?: Euler;
  position?: Vector3;
  height: number;
  color: string;
}

function Box(props: boxProps): ReactElement {
  const size = 0.01//props.height  * .01 > .01 ? .01 : props.height  * .01
  const height = props.height * 1e-6 < .01
    ? .01
    : props.height * 1e-6 < 10
      ? props.height * 1e-6
      : 10
  const points = useRef(null!)
  return (
    <instancedMesh
      {...props}
      castShadow
      receiveShadow
      ref={points}
    >
      <boxGeometry args={[size, height * 2, size]} />
      <pointsMaterial
        color={props.color}
      // wireframe
      />
    </instancedMesh>
  );
}

export default Box;
