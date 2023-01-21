import { ReactElement} from 'react'
import { Euler, Vector3, Color } from "three";

interface planeProps {
    rotation?: Euler;
    position?: Vector3;
    color?: Color;
  }
function Plane(props: planeProps): ReactElement {
  return (
    <mesh receiveShadow  rotation={[-Math.PI / 2, 0, 0]} position={[-12.5,0,0]}>
      <planeGeometry args={[175, 400]}/>
      <meshStandardMaterial color="#222" />
    </mesh>
  )
}

export default Plane;