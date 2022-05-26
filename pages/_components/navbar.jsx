import { useEffect } from "react";
import { slide as Menu } from "react-burger-menu";

export default function Navbar({ page, setPage }) {
  useEffect(() => {
    document.querySelector(`li.flex.${page}`).style.borderBottom =
      "2px solid #FEA55F";
  });

  function thisPage(_page) {
    if (typeof window !== "undefined") {
      document.querySelectorAll(".navbar > ul > li.flex").forEach((el) => {
        el.style.borderBottom = "none";
      });
      document.querySelector(`li.flex.${_page}`).style.borderBottom =
        "2px solid #FEA55F";
    }
    setPage(_page);
  }
  return (
    <div className="components-container navbar flex">
      <p>sopow</p>
      <div className="burger-menu">
        <Menu>
          <a id="home" className="menu-item" onClick={() => thisPage("home")}>
            _home
          </a>
          <a id="about" className="menu-item" onClick={() => thisPage("about")}>
            _about
          </a>
          <a id="projects" className="menu-item" onClick={() => thisPage("projects")}>
            _projects
          </a>
          <a id="contact" className="menu-item" onClick={() => thisPage("contact")}>
            _contact
          </a>
        </Menu>
      </div>
      <ul className="flex">
        <li className="flex home" onClick={() => thisPage("home")}>
          _hello
        </li>
        <li className="flex about" onClick={() => thisPage("about")}>
          _about-me
        </li>
        <li className="flex projects" onClick={() => thisPage("projects")}>
          _projects
        </li>
        <li className="flex contact" onClick={() => thisPage("contact")}>
          _contact-me
        </li>
      </ul>
    </div>
  );
}
