import { ReactElement } from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

function House(): ReactElement {
  const fbx = useLoader(FBXLoader, 'assets/models/casa2.fbx')
  return (<primitive receiveShadow castShadow scale={.05} position={[-50,1.5,0]} object={fbx} />)
}

export default House;
