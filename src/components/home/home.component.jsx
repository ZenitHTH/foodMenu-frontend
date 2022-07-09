import React, { useState } from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import FoodCard from "./foodCard/foodCard.component";
import Image from "./foodCard/food.jpg";
import "./home.css";

function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <CardGroup className="mt-3 md-6">
      <Row
        className="justify-content-center g-4"
      /*{
          width >= 768
            ? "justify-content-center g-4"
            : width < 768 && width >= 576
            ? "mobile-center g-4"
            : "small-center g-4"
        }*/
      >
        {
            elements.map((value, index) => {
          return (
            <Col md="auto">
              <FoodCard
                cardStyleWidth={
                  width > 767
                    ? "19rem"
                    : width > 576 && width <= 767
                    ? `${width*0.80}px`
                    : "90%"
                }
              cardMargin={
                width > 767 ? "" : width > 576 && width <= 767 ? `${width*0.1}px` : "5%"
              }
                cardVariant="top"
                image={Image}
                title="Title"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet."
              />
            </Col>
          );
        })}
      </Row>
    </CardGroup>
  );
}

export default Home;
