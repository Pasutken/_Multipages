import { useState, useEffect } from 'react';
import Variable from '../Variable/Variable';

import './Temperatures.css';

function Temperatures() {
    const [celsius, setCelsius] = useState(25.00);
    const [fahrenheit, setFahrenheit] = useState(77.00);
    const [kelvin, setKelvin] = useState(298.15);

    // แปลงจากเซลเซียสเป็นฟาเรนไฮต์
    const convertCelsiusToFahrenheit = (c) => (c * 9/5) + 32;
    // แปลงจากเซลเซียสเป็นเคลวิน
    const convertCelsiusToKelvin = (c) => c + 273.15;

    // แปลงจากฟาเรนไฮต์เป็นเซลเซียส
    const convertFahrenheitToCelsius = (f) => (f - 32) * 5/9;
    // แปลงจากฟาเรนไฮต์เป็นเคลวิน
    const convertFahrenheitToKelvin = (f) => convertCelsiusToKelvin(convertFahrenheitToCelsius(f));

    // แปลงจากเคลวินเป็นเซลเซียส
    const convertKelvinToCelsius = (k) => k - 273.15;
    // แปลงจากเคลวินเป็นฟาเรนไฮต์
    const convertKelvinToFahrenheit = (k) => convertCelsiusToFahrenheit(convertKelvinToCelsius(k));

    // เมื่อค่าเซลเซียสเปลี่ยน ให้แปลงค่าเป็นฟาเรนไฮต์และเคลวิน
    useEffect(() => {
        setFahrenheit(parseFloat(convertCelsiusToFahrenheit(celsius).toFixed(2)));
        setKelvin(parseFloat(convertCelsiusToKelvin(celsius).toFixed(2)));
    }, [celsius]);

    // เมื่อค่าฟาเรนไฮต์เปลี่ยน ให้แปลงค่าเป็นเซลเซียสและเคลวิน
    useEffect(() => {
        const c = parseFloat(convertFahrenheitToCelsius(fahrenheit).toFixed(2));
        setCelsius(c);
        setKelvin(parseFloat(convertCelsiusToKelvin(c).toFixed(2)));
    }, [fahrenheit]);

    // เมื่อค่าเคลวินเปลี่ยน ให้แปลงค่าเป็นเซลเซียสและฟาเรนไฮต์
    useEffect(() => {
        const c = parseFloat(convertKelvinToCelsius(kelvin).toFixed(2));
        setCelsius(c);
        setFahrenheit(parseFloat(convertCelsiusToFahrenheit(c).toFixed(2)));
    }, [kelvin]);

    return (
        <div className="temperatures-container">
            <h3 className="temperatures-title"> TEMPERATURES </h3>
            <h3 className="temperatures-display">
                <span className="badge bg-primary"> {celsius.toFixed(2)} °C </span>
                <span className="badge bg-primary"> {fahrenheit.toFixed(2)} °F </span>
                <span className="badge bg-primary"> {kelvin.toFixed(2)} °K </span>
            </h3>
            <div className="temperatures-variable">
                <Variable type="int" name={"CELSIUS"} value={celsius} setValue={setCelsius} />
                <Variable type="int" name={"FAHRENHEIT"} value={fahrenheit} setValue={setFahrenheit} />
                <Variable type="int" name={"KELVIN"} value={kelvin} setValue={setKelvin} />
            </div>
        </div>
    );
}

export default Temperatures