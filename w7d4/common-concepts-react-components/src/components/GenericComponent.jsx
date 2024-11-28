export default function SomeComponent(props) {
  return (
    <div>
      <PlantButton isWellWatered={true}>Water plant #1</PlantButton>
      <PlantButton isWellWatered={false}>Water plant #2</PlantButton>
    </div>
  );
}

// GenericComponent
function PlantButton(props) {
  const { isWellWatered, children } = props;

  return (
    <button
      style={{
        border: "0.2em solid white",
        borderColor: isWellWatered ? "green" : "red",
      }}
    >
      {children}
    </button>
  );
}
