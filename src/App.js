import React, { useState } from "react";
import { BaseColaboradores } from "./components/nomina";
import Nominas from "./components/nomina";

function App() {
  const [filtro, setFiltro] = useState("");

  const FiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  return (
    <div>
      <Nominas filtro={filtro} />
    </div>
  );
}

export default App;
