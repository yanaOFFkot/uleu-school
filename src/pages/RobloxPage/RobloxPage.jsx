import React from 'react';

import s from "./RobloxPage.module.scss"
import Roblox from "../../assets/images/Roblox.png";

const items = [
  {
    id: 1,
    title: 'Придумывать и воплощать ',
    desc: 'Уже на первом занятии создадим проект и научим применять знания на практике.'
  },
  {
    id: 2,
    title: 'Креативное самовыражение',
    desc: 'Выражение своей индивидуальности и фантазии, создавая уникальные игровые миры и персонажей, что способствует развитию их творческого потенциала.'
  },
  {
    id: 3,
    title: 'Подготовка к будущей карьере',
    desc: 'Изучение программирования на платформе Roblox может служить отличной отправной точкой для будущей карьеры в сфере разработки видеоигр или программирования, давая детям ценный опыт и навыки.'
  },
]

function RobloxPage() {

  return (
    <section className={s.roblox}>
      <h2 className='font-h2 text-color-purple'>Почему Roblox?</h2>
      <div className={s.items}>

        {
          items.map(item => (
            <div key={item.id} className={s.item}>
              <div className={s.circle}>{item.id}</div>
              <h2 className='font-h4 text-color-purplelight'>{item.title}</h2>
              <p className='font-h6 text-color-black'> {item.desc}</p>
            </div>
          ))
        }

      </div>
      <img className={s.image} src={Roblox} alt="Roblox" />
    </section>
  );
}

export default RobloxPage;


