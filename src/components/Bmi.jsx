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

    const bmi = (parsedWeight / ((parsedHeight * parsedHeight) / 10000)).toFixed(2);

    if (bmi < 18.6) setResult(`Under Weight: ${bmi}`);
    else if (bmi >= 18.6 && bmi < 24.9) setResult(`Normal: ${bmi}`);
    else setResult(`Over Weight: ${bmi}`);
  };

  return (
    <div className='h-[90vh] flex justify-center m-10 flex-col align-middle'>
        <div className='bg-white'>
        
        <h1 className='text-bold text-black'>Calculate Your Body Mass Index(BMI) Now</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ipsam.</p>
        </div>
    <div>
      <input
        type="text"
        id="height"
        placeholder="Enter Height (in cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <input
        type="text"
        id="weight"
        placeholder="Enter Weight (in kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button id="btn" onClick={calculateBMI}>
        Calculate BMI
      </button>
      <div id="result">{result}</div>
    </div>
    </div>
  );
}

export default BMICalculator;

