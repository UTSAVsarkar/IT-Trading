import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CustomCarousel() {
  return (
    <Carousel interval={1500}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="Image One"
        />
        <Carousel.Caption>
          <h1>End to end IT Infrastructure Solutions</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="Image One"
        />
        <Carousel.Caption>
          <h1>Server, Storage & Backup</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="Image One"
        />
        <Carousel.Caption>
          <h1>Networking Solutions</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="Image One"
        />
        <Carousel.Caption>
          <h1>UPS/ Racks / Power Solutions</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
          alt="Image One"
        />
        <Carousel.Caption>
          <h1>Security Solutions</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
