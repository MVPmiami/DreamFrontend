import React from "react";
import './helloSection.scss';
import Anime from 'react-animejs-wrapper'

const HelloSection = () => {
  return (
    <Anime 
      config={{
      translateY: [-2000, 0],
      scale: [0, 1],
      loop: 1,
      duration: 3000,
    }}>
    <div className="hello-section-wrapper">
      <div className="container">
        <div className="hello-section">
          <div className="hello-section-photo"></div>
          <h1 className="hello-section-header">Привет! Меня зовут Алексей Сенькевич, я IT- специалист, занимаюсь разработкой сайтов.</h1>
        </div>
      </div>
    </div>
    </Anime>
  )
}

export default HelloSection;