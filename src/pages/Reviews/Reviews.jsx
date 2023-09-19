import React from 'react';
import s from "./Reviews.module.scss";

import Avatar_Andrey from "../../assets/images/Avatar_Andrey.png";
import Avatar_Maria from "../../assets/images/Avatar_Maria.png";
import Avatar_Denis from "../../assets/images/Avatar_Denis.png";
import Avatar_Olya from "../../assets/images/Avatar_Olya.png";
import Avatar_Vladislav from "../../assets/images/Avatar_Vladislav.png";
import Avatar_Elizaveta from "../../assets/images/Avatar_Elizaveta.png";

const studentsData = [
  {
    name: 'Андрей',
    age: 13,
    feedback: 'Учить программирование через видеокурс в UleuSchool очень удобно! Все объясняется понятно, и я могу повторять материал, если что-то не понял. Спасибо за отличный курс!',
    avatar: Avatar_Andrey,
  },
  {
    name: 'Мария',
    age: 10,
    feedback: 'Мне нравится смотреть видеоуроки по Roblox в UleuSchool. Это как увлекательный мультфильм, только я еще и учусь создавать игры!',
    avatar: Avatar_Maria,
  },
  {
    name: 'Денис',
    age: 14,
    feedback: 'С видеокурсом UleuSchool моя мечта о создании собственной игры стала реальностью. Я уже знаю, как делать свои уровни и придумывать сюжет!',
    avatar: Avatar_Denis,
  },
  {
    name: 'Оля',
    age: 11,
    feedback: 'Записанные уроки очень удобны, особенно когда нужно вернуться и повторить что-то. Я теперь точно знаю, как сделать свой мир в Roblox!',
    avatar: Avatar_Olya,
  },
  {
    name: 'Владислав',
    age: 9,
    feedback: 'Мама нашла этот курс, и я смотрю его каждый день. Я хочу стать программистом, и UleuSchool помогает мне в этом.',
    avatar: Avatar_Vladislav,
  },
  {
    name: 'Елизавета',
    age: 15,
    feedback: 'Видеокурс Roblox в UleuSchool - это отличный способ научиться программированию в удобное время. Спасибо за доступный и интересный материал!',
    avatar: Avatar_Elizaveta,
  },
];

function Reviews() {
  return (
    <section className={s.reviews} id="reviews">
      <div className={s.group}>
        <div className={s.frame}>
          <div className={s.headline}>
            <h2 className='font-h2 text-color-purple'>Отзывы</h2>
            <h3 className='font-h3 text-color-black'>Об этом курсе лучше скажут дети</h3>
          </div>
          
          {studentsData.reduce((rows, student, index) => {
            if (index % 3 === 0) {
              rows.push([]);
            }
            const currentRow = rows[rows.length - 1];
            currentRow.push(student);
            return rows;
          }, []).map((row, rowIndex) => (
            <div key={rowIndex} className={s.row}>
              {row.map((student, studentIndex) => (
                <div key={studentIndex} className={s.content}>
                  <div className={s.features}>
                    <div className={s.verticalCont}>
                      <div className={s.frame}>
                        <h5 className='font-h5 text-color-black'>{student.name}</h5>
                        <h6 className='font-h6 text-color-black'>{student.age} лет</h6>
                      </div>
                      <img className={s.image} src={student.avatar} alt={`Avatar_${student.name}`} />
                    </div>
                    <div className={s.textCont}>
                      <h6 className='font-h6 text-color-black'>{student.feedback}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
