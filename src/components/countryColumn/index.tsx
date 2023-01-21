import { ReactElement } from "react";
import { Html } from "@react-three/drei";
import { Vector3 } from "three";

interface boxProps {
  rotation?: number[];
  position?: Vector3;
  color: string;
  name: string;
  height: number;
  pop: number;
}
function kFormatter(num:number):string {
  return `${Math.abs(num) > 999 ? Math.sign(num)*(Math.round(Math.abs(num)/100)/10) + 'k' : Math.sign(num)*Math.abs(num)}`
}

const newShade = (hexColor:string, magnitude:number):string => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
      const decimalColor = parseInt(hexColor, 16);
      let r = (decimalColor >> 16) + magnitude;
      r > 255 && (r = 255);
      r < 0 && (r = 0);
      let g = (decimalColor & 0x0000ff) + magnitude;
      g > 255 && (g = 255);
      g < 0 && (g = 0);
      let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
      b > 255 && (b = 255);
      b < 0 && (b = 0);
      return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
      return hexColor;
  }
};


function CountryColumn(props: boxProps): ReactElement {
  // console.log("props", props);
  const glassMaterialProps = {
    thickness: 0,
    roughness: 0,
    clearcoat: 0,
    clearcoatRoughness: 0,
    ior: 1.25,
    envMapIntensity: 0,
    color: props.color,
    attenuationTint: props.color,
    attenuationDistance: 0,
  };
  console.log(kFormatter(props.pop))
  let formatter = Intl.NumberFormat('en', { notation: 'compact' });
  const population = formatter.format(props.pop)
  return (
      <mesh position={props.position} receiveShadow castShadow>
        <boxGeometry args={[40, props.height, 40]} />
        <meshPhysicalMaterial {...glassMaterialProps} />
          <Html position={[0,props.height/2,10]}>
            <div style={{ color: newShade(props.color, -100), fontSize: 12 }}>{props.name}</div>
          </Html>
          <Html position={[0,(-props.height/2) - 5,10]}>
            <div style={{ color: "#fff", fontSize: 12 }}>{population}</div>
          </Html>
      </mesh>
  );
}

export default CountryColumn;
