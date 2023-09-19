import React from 'react';
import Button from '@mui/material/Button';
import Table from "./Table"

import s from "./Description.module.scss"
import Girl from "../../assets/images/Girl_1.png";


function Description() {

  return (
    <section className={s.description} id="description">

      <h2 className='font-h2 text-color-white'>Описание курса</h2>

      <div className={s.columns}> 
        <div className={s.textPart}>

            <p className="font-h6 text-color-white text-align-left">
                Уникальный путь к мастерству в Roblox Studio для юных разработчиков.
                Данный курс позволит молодым ученикам освоить искусство разработки игр, начиная с создания трехмерных моделей и завершая 
                программированием сценариев игр и разработкой пользовательского интерфейса. Мы предоставляем знания и навыки, необходимые 
                для создания проектов, которые будут востребованы в мире компьютерных игр. Ученики смогут не только научиться создавать 
                собственные игры, но и поделиться ими с друзьями, получив обратную связь и поддержку.
            </p>

            <Button size='large' variant="contained" color='secondary' style={{ marginTop: "20px", fontSize: "2rem " }}>
                Подробнее
            </Button>

        </div>

        <div className={s.photo}>
            <img className={s.photo2} alt="Girl" src={Girl}/>
        </div>
      </div>

      <div className={s.table}>

        <h2 className='font-h2 text-color-purple'>Что узнает ребенок?</h2>
        <Table />

      </div>

      

    </section>
  );
}

export default Description;


