import { useState, useEffect } from "react";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import SwitchComponent from "./_switch-component";

export default function App() {
  const [page, setPage] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoaded(true);
    })
  });
  return (
    <>
    <Navbar page={page} setPage={setPage} />
    <SwitchComponent component={page} />
    <Footer />
  </>
  );
}
