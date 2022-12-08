import { Box } from "@chakra-ui/react";
import { MenuBarra } from "./components/MenuBarra";
import ImageSlider from "./components/ImageSlider";
import Footer  from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { MenuPage } from "./components/MenuPage";
import { HomePage } from "./components/HomePage";
export function App() {

  // eslint-disable-next-line no-lone-blocks
  {/*
  const slides = [
    { url: logoPizzaHouse, title: "beach" },
    { url: logoPizzaHouse2, title: "boat" },
  ];
  const containerStyles = {
    width: "800px",
    height: "480px",
    margin: "0 auto",
  };
  <div>
          <h1>Hello monsterlessons</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
</div>*/}
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Menu" element={<MenuPage/>} />
      </Routes>

        
    </>
  );
}


