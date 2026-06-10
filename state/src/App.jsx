import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [colorChangeCount, setColorChangeCount] = useState(0)

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setColorChangeCount(colorChangeCount + 1)
  };

  return <>
    <div
      className="App"
      style={{
        backgroundColor
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}

      <button style={{display: "block"}}>
        Color changed: {colorChangeCount} times
      </button>

    </div>
  </>
}

export default App;
