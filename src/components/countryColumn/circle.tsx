import { ReactElement } from "react";
import { Vector3 } from "three";

interface boxProps {
  rotation?: number[];
  position?: Vector3;
  color: string;
  name: string;
  size: number;
  pop: number;
}

function CountryColumn(props: boxProps): ReactElement {
  // console.log("props", props);
  const glassMaterialProps = {
    color: props.color,
    attenuationTint: props.color,
  };
  return (
      <mesh position={props.position} receiveShadow castShadow>
        <cylinderGeometry args={[props.size, props.size, props.size]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
      </mesh>
  );
}

export default CountryColumn;
