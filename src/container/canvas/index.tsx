import { Suspense, ReactElement, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, MapControls } from "@react-three/drei";
import { Object3D } from "three";
import Loader from "../../components/loader";
import Plane from "../../components/plane";
import Lights from "../../components/lights";
import Instances from "../../components/instances";
import { StateContext } from "../../context/providers/State";
import { JSONObject, JSONValue } from "../../context/providers/initialState";
import { ObjectType } from "@react-spring/types";

const colorMap:any = {
}

const getColor = (country: JSONValue):any => {
  if(!colorMap[String(country)]) colorMap[String(country)] = generateLightColorHex()
  return colorMap[String(country)]
}

const processingJson = (json:Array<JSONObject>):Array<JSONObject> => {
  const processedJson:Array<JSONObject> = json.map((datapoint:JSONObject):any => {
    const newDatapoint:JSONObject = {
      ...datapoint,
      color: getColor(datapoint.country_code)
    }
    return newDatapoint
  })
  return processedJson
}
function generateLightColorHex() {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  return color;
}

function CanvasContainer(): ReactElement {
  const { state } = useContext(StateContext);
  const reduced = state.jsonData ? processingJson(state.jsonData) : []
  const mappedCountry:ObjectType<any> = {}
  reduced.forEach(country => {
    if(!mappedCountry[country.country_code.toString()]) mappedCountry[country.country_code.toString()] = []
    mappedCountry[country.country_code.toString()].push(country)
  })

  return (
    <Canvas shadows camera={{ position: [150, 150, 0]}}>
      <color attach="background" args={['#111']} />
      <MapControls maxPolarAngle={Math.PI / 2 - 0.1} maxDistance={150} />
      <Suspense fallback={<Loader />}>
        <Preload all />
        <Lights />
        <Plane />
        {Object.entries(mappedCountry).map(country => {
          return (<Instances key={`${country[0]}-dataset`} list={mappedCountry[country[0]]} temp={new Object3D()}/>)
        })}
      </Suspense>
    </Canvas>
  );
}

export default CanvasContainer;
