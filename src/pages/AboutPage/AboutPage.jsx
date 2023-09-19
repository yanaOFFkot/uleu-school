import React from "react";

import AuthorOfCourse from "../../assets/images/AuthorOfCourse2.png";
import s from "./AboutPage.module.scss"


export default function ComplexGrid() {
  return (
    <section className={s.about} id="aboutpage">
      <div className={s.profile}>
        <img
          className={s.profilePhoto}
          alt="Author"
          src={AuthorOfCourse}
        />
        <div className={s.ellipse}>
          <p className="font-h4 text-color-purple">Ульянова Яна</p>
          <p className="font-h7 text-color-purple">
            Python Backend Developer, UX/UI designer<br />
            преподаватель Lua на базе Roblox Studio
          </p>
        </div>

      </div>
      <div className={s.description}>


        <p className="font-h2 text-color-purple text-align-left">Об авторе</p>
        <p className="font-h6 text-color-black text-align-left">
          Всем привет! Меня зовут Яна, я создала этот курс специально для детей, которые обожают Roblox, но помимо игр
          их интересует создание собственных уникальных игр, чтобы можно было делиться ими с друзьями и вместе весело
          проводить время.
          <br />
          <br />
          В данном курсе есть уроки для всех уровней:
          <ul className="ul">
            <li>
              Для продвинутых пользователей Roblox Studio, которые хотят выйти на монетизацию и изучить сложные скрипты на языке программирования Lua;
            </li>
            <li>
              Для тех, кто только начинает и хочет погрузиться в мир программирования, изучив основы скриптового языка программирования Lua, а также узнать, что такое циклы, условия, события и многое другое;
            </li>
            <li>
              А также для тех, кто хочет создавать игры, но совсем не хочет программировать, для вас есть отдельный модуль, где уже встроены все скрипты, а создавать игры будет легко и просто, как будто вы собираете конструктор!
            </li>
          </ul>
        </p>

      </div>
    </section>
  );
}
