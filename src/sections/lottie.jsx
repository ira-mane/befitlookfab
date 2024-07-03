import React from 'react';
import Lottie from 'react-lottie';
import animationData from 'https://lottie.host/embed/449c5a6d-fa66-4053-a2c1-be74d5cbf7d0/I9Cs0FnSuK.json';
import Heroimg from '../assets/images/heroimg.png'

const lottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div>
    <img src={Heroimg} alt="Doctor Image/Deiticina/Nutrition" />
    <Lottie options={defaultOptions} height={400} width={400} />
  </div>
  )
}

export default lottie