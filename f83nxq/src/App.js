import Kokteli from "./Komponente/Koktei";
import React, { useState, useRef, useContext, useEffect } from "react";
import BezAlkh from "./Komponente/BezAlkh";
import Meni from "./Komponente/Meni";
import "./styles.css";
export const ThemeContext = React.createContext();

import Categories from "./Komponente/Categorije";
import items from "./Komponente/Podatci";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    console.log("click", category);
    if (category == "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#eeeeee"
      }}
    >
      <main className="Glava">
        <section className="menu section">
          <div className="title">
            <h2 className="Naslov">Nas Meni</h2>
            <div className="underline" />
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Meni items={menuItems} />
        </section>
      </main>

      <ThemeContext.Provider value={darkTheme}>
        <button className="button-85" onClick={toggleTheme}>
          Promjeni temu
        </button>
        <Kokteli />
        <hr />
        <button className="button-85" onClick={toggleTheme}>
          Promjeni temu
        </button>
        <BezAlkh />

        <hr />
      </ThemeContext.Provider>
    </div>
  );
}
