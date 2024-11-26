// Props:
// name
// type
// lastWatered
// wateringInterval

import { checkIfWellWatered } from "../helpers/dateHelpers";

// waterPlant

// State: NO

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval, waterPlant, id } = props;

  const isWellWatered = checkIfWellWatered(lastWatered, wateringInterval)

  const plantListItemStyle = { borderColor: isWellWatered ? "green" : "red" };

  return (
    <li style={plantListItemStyle}>
      <h1>
        {name} - {type}
      </h1>
      <p>Last watered on: {lastWatered}</p>
      <button onClick={waterPlant}>Water plant!</button>
    </li>
  );
}