import React from "react";
import './contacts.scss';

const Contacts = () => {
  return (
    <div className="wrapper-contacts">
      <div className="container">
          <div className="contacts-and-services">
            <div className="contacts-contacts box-contacts">
              <h2>Контакты</h2>
              <ul>
                <li>Телефон: +375 (25) 701-07-92</li>
                <li>Email: frontend.asenkevich@gmail.com</li>
                <li>Телеграм: @aleks_senk</li>
                <li>Инстаграм: asenk.frontend</li>
              </ul>
            </div>
            <div className="services-services box-contacts">
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
    </div>
  )
}

export default Contacts;