
import React from "react";
import { useState } from "react";
import { Step1 } from "./Components/Test";
import { Step2 } from "./Components/Test";


 export default function MultiStepForm() {
    const [formValues, setFormValues] = useState({
      option1: false,
      option2: false,
      option3: false,
      option4: false,
    });
  
    const handleChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };
  
    const [step, setStep] = useState(2);
  
    const nextStep = () => {
      setStep(step + 1);
    };
  
    const prevStep = () => {
      setStep(step - 1);
    };
  
    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={nextStep}
            handleChange={handleChange}
            values={formValues}
          />
        );
      case 2:
        return (
          <Step2
            prevStep={prevStep}
            handleChange={handleChange}
            values={formValues}
          />
        );
      default:
        return null;
    }
  }
  