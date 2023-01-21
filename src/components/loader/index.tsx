import { ReactElement } from "react";
import { Html, useProgress } from '@react-three/drei'

function Loader(): ReactElement {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

export default Loader;