import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const images = [
    { src: "reactjs.png", text: "ReactJs Development", height: "90", backgroundColor: "#ff0000" },
    { src: "chatbot.png", text: "Chatbot Development", height: "60", backgroundColor: "#00ff00" },
    { src: "html.png", text: "Html", height: "50", backgroundColor: "#0000ff" },
    { src: "css.png", text: "CSS", height: "70", backgroundColor: "#ffff00" },
    { src: "js.png", text: "Javscript", height: "90", backgroundColor: "#ff00ff" },
    { src: "flutter.png", text: "Flutter Development", height: "60", backgroundColor: "#00ffff" },
    { src: "shopify.png", text: "Shopify Development", height: "60", backgroundColor: "#ff9900" },
    { src: "wordpress.png", text: "WordPress Development", height: "100", backgroundColor: "#9900ff" },
    { src: "mongodb.png", text: "MongoDB", height: "70", backgroundColor: "#ff99ff" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: false,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
    ],
  };

  return (
    <div className="skills_sections" id="skills">
      <h1>Skills</h1>
      <div className="Developmentskills">
        <p>
          Static Website{" "}
          <span>
            <FontAwesomeIcon
              className="devskillsnext"
              icon={faChevronCircleRight}
              style={{ fontSize: "20px" }}
            />
          </span>
        </p>
        <p>
          Dynamic Websites{" "}
          <span>
            <FontAwesomeIcon
              className="devskillsnext"
              icon={faChevronCircleRight}
              style={{ fontSize: "20px" }}
            />
          </span>
        </p>
        <p>
          Software Requirements Specification{" "}
          <span>
            <FontAwesomeIcon
              className="devskillsnext"
              icon={faChevronCircleRight}
              style={{ fontSize: "20px" }}
            />
          </span>
        </p>
        <p>
          Mobile Application Development{" "}
          <span>
            <FontAwesomeIcon
              className="devskillsnext"
              icon={faChevronCircleRight}
              style={{ fontSize: "20px" }}
            />
          </span>
        </p>
        <p>
          Graphic Design{" "}
          <span>
            <FontAwesomeIcon
              className="devskillsnext"
              icon={faChevronCircleRight}
              style={{ fontSize: "20px" }}
            />
          </span>
        </p>
        <p>
          Chatbot Development{" "}
          <span>
            <FontAwesomeIcon
              className="devskillsnext"
              icon={faChevronCircleRight}
              style={{ fontSize: "20px" }}
            />
          </span>
        </p>
      </div>
      <div className="skills_slider">
        <h1>Technologies</h1>
        <Slider {...settings} className="custom_slider">
          {images.map((item, index) => (
            <div key={index} className="">
              <img src={item.src} alt={`Slide ${index}`} />
              {/* <p>{item.text}</p> */}
            </div>
          ))}
        </Slider>
      </div>
      <div className="progressbar" style={{ zIndex: "3", width: "100%", padding: "20px" }}>
        <h1>Progress</h1>
        {images.map((items, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "row", alignItems: "center" }} className="progress_box">
            <p
              className="progress-width"
              style={{
                width: `${items.height}%`,
                background: "none",
                margin: "5px",
                background: 'white',
                textAlign: "start",
                padding: "2px 10px",
                textShadow: "2px 2px 2px white",
                color: 'black',
                fontSize: '13px',
                opacity: '0.8'
              }}
            >
              {items.text}
            </p>
            {items.height}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
