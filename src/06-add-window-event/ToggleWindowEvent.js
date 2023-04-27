import { useEffect, useState } from "react";
import WindowEvent from "./WindowEvent";

export default function ToggleWindowEvent() {
  const [windowEvent, setWindowEvent] = useState(false);
  // add event listener on double click

  useEffect(() => {
    const handleDoubleClick = () => {
      setWindowEvent(false);
    };

    window.addEventListener("dblclick", handleDoubleClick);

    return () => {
      window.removeEventListener("dblclick", handleDoubleClick);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setWindowEvent((prevState) => !prevState)}>
        Toggle Window Event
      </button>
      {windowEvent && <WindowEvent />}
    </div>
  );
}
