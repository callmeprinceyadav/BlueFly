import React from "react";
import "./Home.css"; //
import "./addtocart.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { text } from '@fortawesome/fontawesome-svg-core';

import { Flex, Text, VStack, Box, Image, Button } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import ShowoffSection from "../ShowOffSection/showOffSection";
import ProductList from "../Product/ProductList";
import CategoryList from "../Category/CategoryList";
import NewProductList from "../Product/NewproductList";

const Home = () => {
  return (
    <>
      <div className="Head">
        <div className="marquesection">
          <strong>
            <marquee className="marque">
              Welcome To BlueFly: Luxury Brand At Discounted Price
            </marquee>
          </strong>
        </div>
        <Box w="100%">
          <Image
            objectFit="cover"
            width="100%"
            src="https://bluefly.com/cdn/shop/files/STEP_INTO_THE_SUN_-_BANNER_1200X200_1_1600x.jpg?v=1717717279"
          ></Image>
        </Box>

        <div className="carousel-container">
          <Carousel infiniteLoop autoPlay showThumbs={false}>
            {[
              {
                src: "https://www.bluefly.com/cdn/shop/files/shutterstock_1112754335-REV_360x.jpg?v=1656342184",
                title: "WORLD OF VALENTINO",
                button: "SHOP Valentino",
              },
              {
                src: "https://www.bluefly.com/cdn/shop/files/Banner_2_300x.png",
                title: "UP TO 90% OFF TRENDING JUMPSUITS & ROMPERS",
                button: "SHOP JUMPSUITS",
              },
              {
                src: "https://www.bluefly.com/cdn/shop/files/Tops_360x.jpg?v=1615206654",
                title: "UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES",
                button: "SHOP PRADA",
              },
            ].map((slide, index) => (
              <div className="carousel-slide" key={index}>
                <img
                  className="sliderImg1"
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                />
                <div className="carousel-text">
                  <h1 className="carousel-title">{slide.title}</h1>
                  <button className="carousel-button">{slide.button}</button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div>
        <h2 style={{ textAlign: "center" }}>RECOMMENDED PRODUCTS</h2>
        

        
        <ProductList />
        <ShowoffSection />
        

        <hr></hr>

        <div>
          <h2 style={{ textAlign: "center" }}>SHOP BY CATEGORY</h2>
        </div>
      </div>

      <CategoryList />

      <div className="carousel-container">
        <Carousel infiniteLoop autoPlay showThumbs={false}>
          {[
            {
              src: "https://www.bluefly.com/cdn/shop/files/shutterstock_1112754335-REV_360x.jpg?v=1656342184",
              title: "WORLD OF VALENTINO",
              button: "SHOP Valentino",
            },
            {
              src: "https://www.bluefly.com/cdn/shop/files/Banner_2_300x.png",
              title: "UP TO 90% OFF TRENDING JUMPSUITS & ROMPERS",
              button: "SHOP JUMPSUITS",
            },
            {
              src: "https://www.bluefly.com/cdn/shop/files/Tops_360x.jpg?v=1615206654",
              title: "UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES",
              button: "SHOP PRADA",
            },
          ].map((slide, index) => (
            <div className="carousel-slide" key={index}>
              <img
                className="sliderImg1"
                src={slide.src}
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-text">
                <h1 className="carousel-title">{slide.title}</h1>
                <button className="carousel-button">{slide.button}</button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>NEW ARRIVALS</h1>
        </div>
        <NewProductList/>

      <div className="lower_section">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <hr></hr>
    </>
  );
};

export default Home;
