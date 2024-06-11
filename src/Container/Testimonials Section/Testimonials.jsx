import React, { useState } from "react";
import "./testimonial.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const Projects = [
    {
      name: "QonvoAI Website",
      Description: "Wordpress",
      image: "qonvo.png",
    },
    {
      name: "Hazoom Warehouse Solution",
      Description: "ReactJS",
      image: "hazoom.png",
    },
    {
      name: "Rehman Group",
      Description: "MERN Application",
      image: "rehmangroup.png",
    },
    {
      name: "Speedway Motors",
      Description: "UI/UX",
      image: "speedwayMotors.png",
    },
    {
      name: "Another Project 2",
      Description: "Description 2",
      image: "html.png",
    },
    {
      name: "Another Project 3",
      Description: "Description 3",
      image: "js.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 1 < Projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="Testimonial" id="testimonial">
      <h1 className="testimonial_head">Projects & Assessments</h1>
      <div className="projects">
        <button className="prenextbtn" onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>
        {Projects.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div className="projects_tab" key={index}>
            <div className="image_box">
              <img src={item.image} alt={item.name} />
            </div>
            <h1>{item.name}</h1>
            <p>{item.Description}</p>
            <button className="view_btn"  >View Project <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
          </div>
        ))}
        <button className="prenextbtn" onClick={handleNext} disabled={currentIndex + 3 >= Projects.length}>
          Next
        </button>
      </div>
      
    </div>
  );
};

export default Testimonials;
