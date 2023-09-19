import React from 'react';

import s from "./FreeLesson.module.scss";
import Form from "./Form"


function FreeLesson() {

    return (
      <section className={s.freeLesson} id="freelesson">

        <div className={s.rectangle}>
            <div className={s.pictures}/>

            <div className={s.textContainer}>
                <h1 className={s.textH}>
                    БЕСПЛАТНЫЙ ПРОБНЫЙ УРОК
                </h1>

                
                <h5 className='font-h5 text-color-white'>От правильного выбора IT курса зависит Ваш будущий результат и успешность обучения. 
                  Чтобы вы и ваш ребенок могли взвешенно принять решение и оценить качество подачи материала мы подготовили для вас БЕСПЛАТНЫЙ пробный видеоурок.
                </h5>
            </div>

        </div>

        <Form />   
      
      </section>
    );
  }
  
  export default FreeLesson;
  
