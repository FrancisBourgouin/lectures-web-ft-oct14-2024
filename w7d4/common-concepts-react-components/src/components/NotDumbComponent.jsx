import { useState } from "react";
// Using any hooks will make the component not 'dumb'

export default function NotDumbComponent(props) {
  const [amountOfCustomers, setAmountOfCustomers] = useState(0);

  const increment = () => setAmountOfCustomers(amountOfCustomers + 1);

  return (
    <div>
      <h1>Hello all!</h1>
      <h2 onClick={increment}>Serving {amountOfCustomers} since 2024</h2>
    </div>
  );
}
