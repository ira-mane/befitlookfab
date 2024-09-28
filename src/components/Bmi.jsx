import React, { useState } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    const parsedHeight = parseInt(height);
    const parsedWeight = parseInt(weight);

    if (isNaN(parsedHeight) || isNaN(parsedWeight)) {
      setResult('Provide valid Height and Weight!');
      return;
    }

    const bmi = (parsedWeight / ((parsedHeight / 100) ** 2)).toFixed(2);

    if (bmi < 18.6) setResult(`Under Weight: ${bmi}`);
    else if (bmi >= 18.6 && bmi < 24.9) setResult(`Normal: ${bmi}`);
    else setResult(`Over Weight: ${bmi}`);
  };

  return (
    <div className="h-[80vh] flex justify-center items-center bg-[#EDFFCC]">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-xl font-bold text-black mb-4">Calculate Your Body Mass Index (BMI) Now</h1>
        <p className="text-gray-700 mb-4">Body mass index (BMI) is a person’s weight in kilograms divided by the square of height in meters. BMI is an inexpensive and easy screening method for weight category—underweight, healthy weight, overweight, and obesity.</p>
        
        <div className="mb-4">
          <input
            type="number"
            id="height"
            placeholder="Enter Height (in cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-green-300"
          />
        </div>
        
        <div className="mb-4">
          <input
            type="number"
            id="weight"
            placeholder="Enter Weight (in kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:border-green-300"
          />
        </div>
        
        <button
          id="btn"
          onClick={calculateBMI}
          className="bg-[#3B5704] hover:bg-black text-white py-2 px-4 rounded focus:outline-none"
        >
          Calculate BMI
        </button>
        
        <div id="result" className="mt-4 text-gray-800">{result}</div>
      </div>
     
    </div>
  );
}

export default BMICalculator;


