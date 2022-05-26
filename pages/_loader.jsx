import { BallTriangle } from "react-loader-spinner/dist/react-loader-spinner.cjs.production";

export default function Loader() {
  return (
    <div className="loader">
      <BallTriangle
        heigth="1000"
        width="1000"
        color="#4D5BCE"
        ariaLabel="loading-indicator"
      />
    </div>
  );
}
