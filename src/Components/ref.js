import { useRef } from 'react';

 export function MyComponent() {
  const refs = useRef([]);

  const handleButtonClick = (index) => {
    console.log(`Button clicked at index ${index}`);
    console.log(refs.current[index].textContent);
  };

  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}onClick={() => handleButtonClick(index)}>
          <span>{item}</span>
          <button >Click me</button>
        <input  type={`text${index}`} />
        <h1 ref={el => (refs.current[index] = el)}> {item}</h1>
        </div>
      ))}
    </div>
  );
}
