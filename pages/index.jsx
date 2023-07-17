import { useState } from "react";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import SwitchComponent from "./_switch-component";

export default function App() {
  const [page, setPage] = useState("home");
  return (
    <>
    <Navbar page={page} setPage={setPage} />
    <SwitchComponent component={page} />
    <Footer />
  </>
  );
}
