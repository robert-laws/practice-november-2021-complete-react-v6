import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Poodle",
    }),
    React.createElement(Pet, {
      name: "Spot",
      animal: "Dog",
      breed: "Golden Retriever",
    }),
    React.createElement(Pet, {
      name: "Felix",
      animal: "Cat",
      breed: "Tabby",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
