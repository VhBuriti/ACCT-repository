import React from "react";
import './Style.css'

let newDate = new Date();
let date = `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`;

function reverseString(str) {
  return str.split("").reverse().join("");
}

const invertedHello = reverseString("Hello World")


function App() {
  return (
    <div className="app">
      <h2>Hello World - {date}</h2>
      <h2>Bonjour le monde - {date}</h2>
      <h2>Helo Byd - {date}</h2>
      <h2>Maitei Mundo - {date}</h2>
      <h2>Hei Verden - {date}</h2>
      <h2>Hello dinja - {date}</h2>
      <h2>Labas pasauli - {date}</h2>
      <h2>Kaixo Mundua - {date}</h2>
      <h2>Helló Világ - {date}</h2>
      <h2>{invertedHello} {date}</h2>
    </div>
  );
}

export default App;
