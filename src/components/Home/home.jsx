import React from "react";
import './home.scss';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="container">
            <div className="contacts">
              <h2>Контакты</h2>
              <ul>
                <li>Телефон: +375 (25) 701-07-92</li>
                <li>Email: frontend.asenkevich@gmail.com</li>
                <li>Телеграм: @aleks_senk</li>
                <li>Инстаграм: asenk.frontend</li>
              </ul>
            </div>
            <div className="services">
              <h2>Услуги</h2>
              <ul>
                <li>Верстка одностраничного сайта</li>
                <li>Верстка многостраничного сайта</li>
                <li>Landing page</li>
                <li>Сайт визитка</li>
                <li>Доработка, правка сайта</li>
                <li>Поддержка сайта после выполнения</li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Home;