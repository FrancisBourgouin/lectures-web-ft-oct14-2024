// Props: waterAllPlants

// State: NO
export default function WaterEveryoneButton(props) {
  const { waterAllThePlants } = props;
  
  return <button onClick={waterAllThePlants}>Water all the plants!</button>;
}
