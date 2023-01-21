import { Suspense, ReactElement, useContext, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, MapControls } from "@react-three/drei";
import Loader from "../../components/loader";
import Lights from "../../components/lights";
import CountryCircle from "../../components/countryColumn/circle";
import CountryColumn from "../../components/countryColumn/";
import { StateContext } from "../../context/providers/State";
import { Vector3 } from "three";
type CountryObjType = { country: string, pop: number }


const colorMap: any = {
}

const getColor = (country: string): any => {
    if (!colorMap[String(country)]) colorMap[String(country)] = generateLightColorHex()
    return colorMap[String(country)]
}

function generateLightColorHex() {
    let color = "#";
    for (let i = 0; i < 3; i++)
        color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
    return color;
}

function CanvasContainer(): ReactElement {
    const { state, actionsCollection } = useContext(StateContext);
    const [frame, setFrame] = useState(0)
    const [countriesCurrentData, setCountriesCurrentData] = useState(Array<{ country: string, pop: number }>)
    const [countriesCurrentDataTop, setCountriesCurrentDataTop] = useState(Array<{ country: string, pop: number }>)
    const [currentYear, setCurrentYear] = useState(1949)
    const [min] = useState(1950)
    const [max] = useState(2021)
    const intervalref = useRef<number | null>(null);
    const startInterval = () => {
        if (intervalref.current !== null) return;
        intervalref.current = window.setInterval(() => {
            setFrame((prevFrame) => prevFrame + 1);
        }, 25e1);
    };
    const stopInterval = () => {
        if (intervalref.current) {
            window.clearInterval(intervalref.current);
            setFrame(0);
            intervalref.current = null;
        }
    };
    useEffect(() => {
        if (frame >= 1) {
            if (currentYear === max) {
                setCurrentYear(min)
                actionsCollection.example?.setYear(min)
            } else {
                setCurrentYear(currentYear + 1)
                actionsCollection.example?.setYear(currentYear + 1)
            }
            const currentYearDataSet: Array<CountryObjType> = []
            const currentYearDataSetTop: Array<CountryObjType> = []
            Object.keys(state.jsonData ? state.jsonData : {}).forEach((country: string) => {
                if (!country
                    || country.indexOf("(UN)") !== -1
                    || country.indexOf("Less") !== -1
                    || country.indexOf("Lower") !== -1
                    || country.indexOf("Upper") !== -1
                    || country.indexOf("World") !== -1
                    || country.indexOf("countries") !== -1
                    || country.indexOf("regions") !== -1
                ) return
                let currentCountry = state.jsonData ? state.jsonData[String(country)] : null
                if (!currentCountry || currentCountry.toString().indexOf("(UN)") !== -1) return;
                let currentCountryData = currentCountry.find(point => point.year === currentYear)
                // console.log(currentYear, country, currentCountryData)
                currentYearDataSet.push({
                    country,
                    pop: currentCountryData?.total_population ? currentCountryData.total_population : 0
                })
                if(currentCountryData?.total_population  && currentCountryData?.total_population > 1e8) {
                    currentYearDataSetTop.push({
                        country,
                        pop: currentCountryData?.total_population ? currentCountryData.total_population : 0
                    })
                }
            })
            setCountriesCurrentData(currentYearDataSet.sort((a, b) => (a.pop > b.pop) ? 1 : ((b.pop > a.pop) ? -1 : 0)))
            setCountriesCurrentDataTop(currentYearDataSetTop.sort((a, b) => (a.pop > b.pop) ? 1 : ((b.pop > a.pop) ? -1 : 0)))
            stopInterval();
            if (intervalref.current) window.clearInterval(intervalref.current);
        } else {
            if (intervalref.current === null) {
                startInterval();
            }
        }

        // return () => {
        //     if (intervalref.current !== null) {
        //       window.clearInterval(intervalref.current);
        //     }
        //   };
    }, [currentYear, setFrame, frame, min, max, state.jsonData, actionsCollection])
    // console.log(currentYear)

    return (
        <Canvas shadows camera={{ position: [500, 250, 500] }}>
            <color attach="background" args={['#111']} />
            <MapControls maxDistance={500} />
            <Suspense fallback={<Loader />}>
                <Preload all />
                <Lights />
                <>
                    {
                        countriesCurrentData.map(
                            (value, index) => {
                                if (!value.country) return null;
                                const size = value.pop / 1e7
                                return (<CountryCircle 
                                    key={index} 
                                    position={new Vector3(0, -size, 0)} 
                                    color={getColor(String(value.country))} 
                                    name={String(value.country)} 
                                    size={size} 
                                    pop={value.pop} />)
                            })
                    }{
                        countriesCurrentDataTop.map(
                            (value, index) => {
                                if (!value.country) return null;
                                const height = value.pop / 1e7
                                return (<CountryColumn 
                                    key={index} 
                                    position={new Vector3(-100, (50 + height/2), ((index-(countriesCurrentDataTop.length/2))*50))} 
                                    color={getColor(String(value.country))} 
                                    name={String(value.country)} 
                                    height={height}
                                    pop={value.pop}  />)
                            })
                    }
                </>
            </Suspense>
        </Canvas>
    );
}

export default CanvasContainer;
