import React from 'react'
import onboarding from "../../assets/images/onboarding.png";


export default function HeroImage() {
  return (
    <div className="w-full h-full">
      <img
        src={onboarding}
        alt="Food"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
