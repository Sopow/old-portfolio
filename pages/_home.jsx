import createWindowandRedirect from "./_func/redirect";
import ChessboardCustom from "./_components/chessboard";

export default function Home() {
  return (
    <div className="container-background">
      <div className="container container-grid">
        <div className="presentation">
          <p>Hi all. I am</p>
          <h1>Sopow</h1>
          <p className="pre-blue">{">"} Free-lance web developer</p>
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
          <ChessboardCustom />
        </div>
      </div>
    </div>
  );
}
