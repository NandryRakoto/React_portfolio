import React, { useState } from "react";
import "../../index.css";
import "boxicons/css/boxicons.min.css";
import { MenuListData } from "../Data/Data";
import { Link } from "react-router-dom";

export const Header = ({ dark, setDark }) => {
  const [affiche, setAffiche] = useState(false);
  const clique = () => {
    setAffiche(!affiche);
  };
  const ferme = () => {
    setAffiche(false);
  };

  const toogleMenu = () => {
    setDark(!dark);
  };
  return (
    <div className={dark ? "dark" : ""}>
      <header className={dark ? "dark" : ""}>
        <div className="container flex">
          <div className="logo">
            <h1 className={dark ? "darkh1" : ""}>N</h1>
          </div>
          <div className="button">
            <div className="hire">
              <a href="mailto:rnandrianina11@gmail.com">
                <button>Hire me</button>
              </a>
            </div>
            <div className="mode">
              <button onClick={toogleMenu} className={dark ? "btndark" : ""}>
                <i
                  className={`bx ${dark ? "bx-moon " : "bx-sun"} icontranstion`}
                ></i>
              </button>
            </div>
            <div className="hamburger">
              <button onClick={clique}>
                <i
                  className={`bx ${
                    affiche ? "bx-x " : "bx-menu"
                  } icontranstion`}
                ></i>
              </button>
            </div>
          </div>
        </div>
        <div className={affiche ? "masque" : "ListCache"}>
          <h3>Navigation</h3>
          <div className="menuList">
            {MenuListData.map((val, i) => (
              <Link to={val.url} key={i} onClick={ferme}>
                {val.menu}
              </Link>
            ))}
          </div>
          <p>
            Creating seamless user experiences with clean, efficient code. Let’s build the future of the web together!
          </p>
          <div className="reseau">
            <a
              href="https://www.facebook.com/rakotoarisoa.nandrianina.9
"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="
https://www.linkedin.com/in/nandrianina-rakotoarisoa-383367328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://wa.me/261389637092" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a href="tel:+261389637092">
              <i className="bx bx-phone"></i>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
