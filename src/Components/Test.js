import React, { useState } from 'react';
 
  export function Step1(props) {
  const { nextStep, handleChange, values } = props;

  return (
    <div>
      <h1>Step 1</h1>
      <label>
        Option 1:
        <input
          type="checkbox"
          name="option1"
          checked={values.option1}
          onChange={handleChange}
        />
      </label>
      <label>
        Option 2:
        <input
          type="checkbox"
          name="option2"
          checked={values.option2}
          onChange={handleChange}
        />
      </label>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

 export function Step2(props) {
  const { prevStep, handleChange, values } = props;

  return (
    <div>
      <h1>Step 2</h1>
      <label>
        Option 3:
        <input
          type="checkbox"
          name="option3"
          checked={values.option3}
          onChange={handleChange}
        />
      </label>
      <label>
        Option 4:
        <input
          type="checkbox"
          name="option4"
          checked={values.option4}
          onChange={handleChange}
        />
      </label>
      <button onClick={prevStep}>Back</button>
      <button>Submit</button>
    </div>
  );
}
