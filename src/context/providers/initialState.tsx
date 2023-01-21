import data from "../../assets/data/new.json"
console.log(data)

interface JSONArray extends Array<JSONValue> { }
export interface DataPointInterface {
    population: number;
    name: string;
    coordinates: Coordinate;
}
export interface JSONObject {
    coordinates: Coordinate;
    name: JSONValue;
    population: JSONValue;
    country_code: JSONValue;
    color?: JSONValue;
}
type Coordinate = {
    lat: number;
    lon: number;
}
export type JSONValue =
    | string
    | number
    | boolean
    | JSONObject 
    | JSONArray;

export type DispatchArgs = {
    type: string;
    payload: any;
  }
  
export type State = {
    test: number;
    test_color: string,
    show: boolean;
    loading: boolean;
    jsonData?: Array<JSONObject>
}

const initialState: State = {
    test: 0,
    test_color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    show: false,
    loading: false,
    jsonData: data as Array<JSONObject>
};
export default initialState;
