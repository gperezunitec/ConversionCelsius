import {TemperaturaModel} from "@/Modelos/TemperaturaModel";

export const ConversionComponent = ({celsius,farenheit,kelvin}:number) => {

    return (
        <>

        <ul>
            <li>Celsius: {celsius}</li>
            <li>Farenheit: {farenheit}</li>
            <li>Kelvin: {kelvin}</li>
        </ul>

        </>
    )

}