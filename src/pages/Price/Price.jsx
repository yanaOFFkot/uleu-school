import React from 'react';
import Button from '@mui/material/Button';

import s from "./Price.module.scss";
import Check from "../../assets/svg/check regular.svg";
import Close from "../../assets/svg/close cross regular.svg";


function Price() {

  return (
    <section className={s.price} id="price">

      <h2 className='font-h2 text-color-white'>Тарифные планы</h2>

      <div className={s.columns}> 
        <div className={s.items}>
            <div className={s.item}>

                <div className={s.containerFirst}>

                    <div className={s.label}>
                        <h6 className='font-h5 text-color-black'>1 модуль на выбор</h6>
                    </div>

                    <div className={s.textConteiner}>
                        <h3 className='font-h2 text-color-black'>$100.00 за пакет</h3>
                        <h6 className="font-h5 text-color-black text-align-center">Вы экономите: 0USD</h6>


                    </div>

                </div>

                
                <div className={s.containerSecond}>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Полный доступ к выбранному модулю </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Видеоуроки </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Интерактивные материалы </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Интерактивные материалы </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Скрипты в текстовом формате </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Close} alt="Check"/>
                        <h6 className="font-h6 text-color-grey"> Дополнительные материалы </h6>
                    </div>

                </div>

            </div>

            
            <Button size='large' variant="contained" color='secondary' style={{ marginTop: "20px", fontSize: "2rem " }}>
                Купить
            </Button>

        </div>

        <div className={s.items}>
            <div className={s.item}>

                <div className={s.containerFirst}>

                    <div className={s.label}>
                        <h6 className='font-h5 text-color-black'>4 модуля на выбор</h6>
                    </div>

                    <div className={s.textConteiner}>
                        <h3 className='font-h2 text-color-black'>$350.00 за пакет</h3>
                        <h6 className="font-h5 text-color-black text-align-center">Вы экономите: 50USD</h6>


                    </div>

                </div>

                
                <div className={s.containerSecond}>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Полный доступ к выбранному модулю </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Видеоуроки </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Интерактивные материалы </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Интерактивные материалы </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Скрипты в текстовом формате </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Close} alt="Check"/>
                        <h6 className="font-h6 text-color-grey"> Дополнительные материалы </h6>
                    </div>

                </div>

            </div>

            
            <Button size='large' variant="contained" color='secondary' style={{ marginTop: "20px", fontSize: "2rem " }}>
                Купить
            </Button>

        </div>

        <div className={s.items}>
            <div className={s.item}>

                <div className={s.containerFirst}>

                    <div className={s.label}>
                        <h6 className='font-h5 text-color-black'>ВСЕ МОДУЛИ</h6>
                    </div>

                    <div className={s.textConteiner}>
                        <h3 className='font-h2 text-color-black'>$650.00 за пакет</h3>
                        <h6 className="font-h5 text-color-black text-align-center">Вы экономите: 150USD</h6>


                    </div>

                </div>

                
                <div className={s.containerSecond}>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Полный доступ к выбранному модулю </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Видеоуроки </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Интерактивные материалы </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Интерактивные материалы </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Скрипты в текстовом формате </h6>
                    </div>

                    <div className={s.checkContainer}>
                        <img src={Check} alt="Check"/>
                        <h6 className="font-h6 text-color-black"> Дополнительные материалы </h6>
                    </div>

                </div>

            </div>

            
            <Button size='large' variant="contained" color='secondary' style={{ marginTop: "20px", fontSize: "2rem " }}>
                Купить
            </Button>

        </div>

        
      </div>
    
    </section>
  );
}

export default Price;


