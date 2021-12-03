import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt me!"),
    React.createElement(Pet, {
      name: "Nalla",
      animal: "Dog",
      breed: "Shi tzu",
    }),
    React.createElement(Pet, {
      name: "Simbaaa",
      animal: "Dog",
      breed: "Rusky",
    }),
    React.createElement(Pet, {
      name: "Romeu",
      animal: "Bird",
      breed: "Parrot",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
