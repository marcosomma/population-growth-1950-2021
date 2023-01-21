import { ReactElement, useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function House(): ReactElement {
  const { nodes, scene } = useLoader(GLTFLoader, 'assets/models/casa.glb')

  useMemo(() => {
    Object.values(nodes).forEach((obj) => {
      // @ts-ignore
      if (obj.isMesh) {
        Object.assign(obj, { castShadow: true, receiveShadow: true });
      }
    });
  }, [nodes]);

  return (<primitive receiveShadow castShadow scale={5} position={[-40,1.5,20]} object={scene} />)
}

export default House;
