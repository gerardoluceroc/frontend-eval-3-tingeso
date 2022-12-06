import { Box, Image } from "@chakra-ui/react";
import { MenuBarra } from "./components/MenuBarra";
import ImageSlider from "./components/ImageSlider";
import logoPizzaHouse from "./assets/pizzaHouseLogo.png"
import logoPizzaHouse2 from "./assets/pizza-house-transparente.png"
import SliderBeta from "./components/ImageSlider";
import Footer  from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Router>
      <Box bgColor={'lightsalmon'} h={739}>
        <MenuBarra/>
        <div>Wena los dkk</div>
        <ImageSlider/>
        <Footer/>
        

      </Box>
      </Router>
      
        
    </>
  );
}


