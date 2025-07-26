'use client'
import {ConversionComponent} from "@/Components/ConversionComponent";
import {TemperaturaModel} from "@/Modelos/TemperaturaModel";
import {useState} from "react";

export const Celsius = () => {


    let temperatura:TemperaturaModel={
        celsius:0,
        farenheit:0,
        kelvin:0,
    }


    const [inputValue, setInputValue] = useState(0);

    const onInputValue = (e) => {
        setInputValue(e.target.value);
    }
    
    

    const obtenerCelsius = (valorCelsius:number):number => {
        temperatura.celsius=valorCelsius;
        return temperatura.celsius;
    }


    const calcularFarenheit = ():number => {
        temperatura.farenheit=(temperatura.celsius*9/5)+32;
        return temperatura.farenheit;
    }

    const calcularKelvin = ():number => {
        temperatura.kelvin=temperatura.celsius+273.15;
        return temperatura.kelvin;
    }


    return (
        <>

            <label htmlFor="celsiusInput">Ingrese el valor en celsius</label>
            <input type="number" id="celsiusInput"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   value={inputValue} onChange={onInputValue} />
            {/*<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">*/}
            {/*    Calcular*/}
            {/*</button>*/}

            <ConversionComponent celsius={obtenerCelsius(inputValue)} farenheit={calcularFarenheit()}
                                 kelvin={calcularKelvin()}></ConversionComponent>
        </>
    )

}