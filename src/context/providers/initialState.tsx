import data from "../../assets/data/origin.json"

interface JSONArray extends Array<JSONValue> { }
export interface DataPointInterface {
    population: number;
    name: string;
    coordinates: Coordinate;
}
export interface DataSet {[key: string]: Array<JSONObject>}
export interface JSONObject {
        year: number;
        total_population: number;
        under_1: number;
        under_5: number;
        under_15: number;
        under_25: number;
        between_16_64: number;
        '1_yo': number;
        between_1_4: number;
        between_5_9: number;
        between_10_14: number;
        between_15_19: number;
        between_20_29: number;
        between_30_39: number;
        between_40_49: number;
        between_50_59: number;
        between_60_69: number;
        between_70_79: number;
        between_80_89: number;
        between_90_99: number;
        over_100:  number;
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
    year: string;
    test_color: string;
    show: boolean;
    loading: boolean;
    jsonData?: DataSet
}

const initialState: State = {
    test: 0,
    year: '1950',
    test_color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    show: false,
    loading: false,
    jsonData: data as DataSet
};
console.log('data', data)
console.log('initialState', initialState)
export default initialState;
