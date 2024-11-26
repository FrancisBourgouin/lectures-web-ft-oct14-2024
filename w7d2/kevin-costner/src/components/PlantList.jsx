// Props:
// plants[]
// waterPlant
// State: NO

import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plantList, waterPlant } = props;

  const parsedPlantList =
    Array.isArray(plantList) &&
    plantList.map((plant) => (
      <PlantListItem key={plant.id} {...plant} waterPlant={() => waterPlant(plant.id)} />
    ));
  // const parsedPlantList = plantList.map(plant => <PlantListItem key={plant.id} name={plant.name} type={plant.type} />)

  return <ul>{parsedPlantList}</ul>;
}
