import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Testcolor from "./components/Testcolor";
import Translate from "./components/Translate";
import Route from "./Route";
import Header from "./components/Header";

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

const items = [
  {
    title: "Whats your name ?",
    content: "My name is Saad",
  },
  {
    title: "What do you like ?",
    content: "I like to be loved",
  },
  {
    title: "Why do you like to be loved ?",
    content: "Who doesn't ?",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <Testcolor selected={selected} options={options} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>
    </div>
  );
};
export default App;
