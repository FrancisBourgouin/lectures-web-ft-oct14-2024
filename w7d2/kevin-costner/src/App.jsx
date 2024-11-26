import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import WaterEveryoneButton from "./components/WaterEveryoneButton";
import { plantsObj } from "./data/plantData";

function App() {
  const [plants, setPlants] = useState(plantsObj);

  const plantList = Object.values(plants);
  const amountOfPlants = plantList.length;

  const waterPlant = (plantId) => {
    const updatedPlants = { ...plants };

    const updatedDate = new Date().toLocaleDateString();

    // You'll dig more into it tomorrow!
    const updatedPlant = { ...plants[plantId] };
    updatedPlant.lastWatered = updatedDate;

    updatedPlants[plantId] = updatedPlant;

    setPlants(updatedPlants);
  };
  
  const sadWaterAllThePlants = () => {
    for(const key in plants){
      waterPlant(key)
    }
  }

  const waterAllThePlants = () => {
    const updatedPlants = { ...plants };
    const updatedDate = new Date().toLocaleDateString();

    for (const key in updatedPlants) {
      const updatedPlant = { ...plants[key] };
      updatedPlant.lastWatered = updatedDate;
      updatedPlants[key] = updatedPlant;
    }

    setPlants(updatedPlants);
  };
  return (
    <>
      <Header amountOfPlants={amountOfPlants} />
      <PlantList plantList={plantList} waterPlant={waterPlant} />
      <WaterEveryoneButton waterAllThePlants={waterAllThePlants} />
    </>
  );
}

export default App;
