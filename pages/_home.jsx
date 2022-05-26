/* eslint-disable @next/next/no-img-element */
import {
  IoMdArrowDropup,
  IoMdArrowDropdown,
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import createWindowandRedirect from "./_func/redirect";

export default function Home() {  
  return (
    <>
      <div className="container">
        <div className="presentation">
          <p>Hi all. I am</p>
          <h1>Sopow</h1>
          <p className="pre-blue">{">"} Full-stack web developer</p>
          <p className="pre-grey">{"//"} find my profile on Github:</p>
          <p className="presentation-code">
            <span className="pre-code-blue">const</span>{" "}
            <span className="pre-code-green">githubLink</span> ={" "}
            <span
              className="pre-code-ahref"
              onClick={() =>
                createWindowandRedirect("https://github.com/Sopow")
              }
            >
              {'"'}https://github.com/Sopow{'"'}
            </span>
          </p>
        </div>
        <div className="snake-game">
          <div className="border-snakegame">
            <span className="vis">
              <img src="/svg-x.svg" alt="x" />
            </span>
            <span className="vis">
              <img src="/svg-x.svg" alt="x" />
            </span>
            <span className="vis">
              <img src="/svg-x.svg" alt="x" />
            </span>
            <span className="vis">
              <img src="/svg-x.svg" alt="x" />
            </span>
          </div>
          <canvas
            className="snake-game-container"
            id="snake-game"
            width="300"
            height="600"
          />
          <span className="snake-game-start-button">{'//'} soon...</span>
          <div className="snake-game-help">
            <span className="snake-game-help-text">
              {"//"} use keyboard
              <br />
              {"//"} arrow to play
            </span>
            <div className="snake-game-help-arrows">
              <span className="snake-game-help-arrow">
                <IoMdArrowDropleft />
              </span>
              <span className="snake-game-help-arrow">
                <IoMdArrowDropdown />
              </span>
              <span className="snake-game-help-arrow">
                <IoMdArrowDropright />
              </span>
              <span className="snake-game-help-arrow">
                <IoMdArrowDropup />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
