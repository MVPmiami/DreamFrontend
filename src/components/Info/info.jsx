import React from "react";
import './info.scss';
import Slider from './../Slider/slider';
const Info = () => {
  
  return (
    
    <div className="info-wrapper">
        <div className="container">
          <Slider/>
          <div className="info-cards">
            <div className="info-cards-skills card">
              <h2 className="info-cards-skills-header">Использую следующие технологии:</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Sass</li>
                <li>Git</li>
                <li>Webpack</li>
                <li>React</li>
                <li>Redux</li>
                <li>FireBase</li>
              </ul>
            </div>
            <div className="info-cards-offers card">
              <h2 className="info-cards-offers-header">Мои услуги:</h2>
              <ul>
                <li>Верстка сайта по шаблону</li>
                <li>Landing page</li>
                <li>Сайт визитка</li>
                <li>Доработка, правка сайта</li>
                <li>Поддержка после выполнения в течении месяца</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Info;