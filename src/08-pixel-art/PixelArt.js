import React from "react";

function ColorPicker() {
  const { setSelectedColor } = React.useContext(SelectedColorContext);
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => {
            setSelectedColor(color);
          }}
        />
      ))}
    </div>
  );
}

function Pixel() {
  const [color, setColor] = React.useState("lightGrey");
  const { selectedColor } = React.useContext(SelectedColorContext);
  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: color,
        margin: "1px",
      }}
      onClick={() => {
        setColor(selectedColor);
      }}
    />
  );
}

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}
//craete react context for selectedColor
const SelectedColorContext = React.createContext();

export default function PixelArt() {
  const [selectedColor, setSelectedColor] = React.useState("");

  return (
    <div>
      <SelectedColorContext.Provider
        value={{ selectedColor, setSelectedColor }}
      >
        <ColorPicker />
        <Pixels />
      </SelectedColorContext.Provider>
    </div>
  );
}
