import { useState } from "react";
import Colorbox from "./Colorbox";
import Textbox from "./Textbox";

function App() {
  const [colorText, setColorText] = useState('')

  return (
    <div className="App">
      <Colorbox
        colorText={colorText}
      />
      <Textbox
        colorText={colorText}
        setColorText={setColorText}
      />
    </div>
  );
}

export default App;
