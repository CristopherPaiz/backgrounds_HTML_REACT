import { useState } from "react";
// import component and styles
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import "./App.css";

import BACKGROUNDS from "./utils/backgrounds.json";
import Botones from "./Botones";

const App = () => {
  //========================   OPEN DRAWER   ========================
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (data) => {
    const { name, accent, primary, drawer, css } = data;
    setIsOpen(true);
    setColorAccent(accent);
    setColorPrimary(primary);
    setColorDrawer(drawer);
    setDataBackground(css);
    setTitulo(name);
    setBackgroundData(data);
  };

  //======================== BUTTON DRAWER ===========================
  const closeDrawer = () => {
    setIsOpen(false);
    setColorAccent("#000");
    setColorPrimary("#fff");
    setDataBackground("<div></div>");
    setTitulo("Backgrounds HTML & REACT");
  };

  //========================   COMPONENTS    ========================
  const [titulo, setTitulo] = useState("Backgrounds HTML & REACT");
  const [colorAccent, setColorAccent] = useState("#000");
  const [colorPrimary, setColorPrimary] = useState("#fff");
  const [colorDrawer, setColorDrawer] = useState("#000");
  const [dataBackground, setDataBackground] = useState("<div></div>");
  const [backgroundData, setBackgroundData] = useState(BACKGROUNDS[0]);

  //========================      JSX      ========================
  return (
    <div style={{ "--color-accent": colorAccent, "--color-primary": colorPrimary, "--color-drawer": colorDrawer }}>
      <div dangerouslySetInnerHTML={{ __html: dataBackground }}></div>
      {/* TITLE */}
      <div className="titulo">
        <h1>{titulo}</h1>
      </div>
      {/* HOME COMPONENTS */}
      <div className={`container ${!isOpen ? "fadeIn" : "fadeOut"}`}>
        {BACKGROUNDS.map((background) => (
          <button
            className="circleBackground"
            key={background.id}
            onClick={() => toggleDrawer(background)}
            style={{ border: `2px solid ${background.accent}` }}
          >
            <span dangerouslySetInnerHTML={{ __html: background.css }}></span>
          </button>
        ))}
      </div>
      {isOpen ? (
        <Botones backgroundData={backgroundData} />
      ) : (
        <p className="subtitle">Many free backgrounds in HTML & REACT for you website</p>
      )}
      {/* DRAWER */}
      <Drawer className="Drawer" open={isOpen} size={150} enableOverlay={false} direction="right" duration={200}>
        <div className="divPadre">
          {/* BUTTON GENERAL HOME */}
          <div className="divBoton">
            <button className="botonGeneral" onClick={closeDrawer}>
              <div className="homeIcon">
                <svg className="iconoHome" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
                  <path d="m39.376 48.002 30.47-25.39a6.003 6.003 0 0 0-7.688-9.223L26.156 43.391a6.01 6.01 0 0 0 0 9.223l36.002 30.001a6.003 6.003 0 0 0 7.688-9.223Z" />
                </svg>
              </div>
              General View
            </button>
          </div>
          {/* COMPONENTS */}
          <div className="componentDrawer">
            <div className={`containerDrawer`}>
              {BACKGROUNDS.map((background) => (
                <div key={background.id} className="circleAndTitle">
                  <span className="titleCircle">{background.name}</span>
                  <button
                    className="circleBackgroundDrawer"
                    onClick={() => toggleDrawer(background)}
                    style={{ border: `2px solid ${background.accent}` }}
                  >
                    <span dangerouslySetInnerHTML={{ __html: background.css }}></span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default App;
