export default function DumbComponent(props) {
  const { amountOfCustomers, increment } = props;

  return (
    <div>
      <h1>Hello all!</h1>
      <h2 onClick={increment}>Serving {amountOfCustomers} since 2024</h2>
    </div>
  );
}
