import React from "react";
import './helloSection.scss';

const HelloSection = () => {
  return (
    <div className="hello-section-wrapper">
      <div className="container">
        <div className="hello-section">
          <div className="hello-section-photo"></div>
          <h1 className="hello-section-header">Привет! Меня зовут Алексей Сенькевич, я IT- специалист, занимаюсь разработкой сайтов.</h1>
        </div>
      </div>
    </div>
    
  )
}

export default HelloSection;