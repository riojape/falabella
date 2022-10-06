import { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Header/MenuLogin";
import Register from "./components/Register/Register";
import { Main } from "./styles/App";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Register />
      </Main>
    </div>
  );
}

export default App;
