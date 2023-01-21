import { useRef, useEffect, useState } from "react";
import { Object3D, InstancedMesh } from "three";
import { JSONObject } from "../../context/providers/initialState";

function generateLightColorHex() {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  return color;
}

function Instances({ temp, list}: { temp: Object3D; list: Array<JSONObject> }) {
  const ref = useRef<InstancedMesh>(null!);
  const [rendered, setRendered] = useState(false)
  useEffect(() => {
    // Set positions
    if(ref.current && !rendered){
      for (let i = 0; i < list.length; i++) {
        const height = Number(list[i].population) * 1e-6 < .02
          ? .02
          : Number(list[i].population) * 1e-6 < 10
            ? Number(list[i].population) * 1e-6
            : 10
        temp.position.set(-Number(list[i].coordinates.lat), 0, -Number(list[i].coordinates.lon))
        temp.scale.set(0.02, height, 0.02)
        temp.receiveShadow = true
        temp.castShadow = true
        temp.updateMatrix()
        ref.current.setMatrixAt(i, temp.matrix)
      }
      // Update the instance
      ref.current.instanceMatrix.needsUpdate = true
      setRendered(true)
    }
  }, [list, temp, rendered])
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, list.length]}>
      <boxGeometry />
      <meshPhongMaterial color={generateLightColorHex()}/>
    </instancedMesh>
  )         
}

export default Instances;
