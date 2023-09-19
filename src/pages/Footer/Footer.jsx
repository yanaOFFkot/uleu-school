import React from 'react';

import logo from '../../assets/svg/logo.svg';
import instagram from '../../assets/svg/instagram.svg';
import telegram from '../../assets/svg/telegram.svg';
import twitter from '../../assets/svg/twitter.svg';

import s from "./Footer.module.scss"


  
const Footer = () => {
  
    return (
      <footer className={s.footer}>
        <div className={s.frameMain}>

          <div className={s.blockLarge}>

            <div className={s.blockMedium}>

              <img className={s.sizeSmall} src={logo} alt="Логотип" />

              <div className={s.blockSmall}>

                <div className={s.textBlock}>
                  <h5 className="font-h5 text-color-white">
                      UleuSchool
                  </h5>
                  <h6 className="font-h6 text-color-white">
                      Видеокурс по программированию
                  </h6>


                </div>

                <div className={s.socialMedia}>
                  <h6 className="font-h6 text-color-white">
                    Подписывайтесь на наши социальные сети
                  </h6>

                  <div class={s.socialIcons}>
                    <a href="https://www.instagram.com/_ul_yanova_/" target="_blank" rel="noreferrer" >
                      <img class={s.Icon} src={instagram} alt="Инстаграм" />
                    </a>
                    <a href="https://t.me/Im_purple_human" target="_blank" rel="noreferrer" >
                      <img class={s.Icon} src={telegram} alt="Телеграм" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" >
                      <img class={s.Icon} src={twitter} alt="Твиттер" />
                    </a>
                  </div>


                </div>


              </div>

            </div> 

          </div> 

          <div className={s.containerVertical}>

            <h5 className="font-h5 text-color-white">
                ПОМОЩЬ
            </h5>

            <h6 className="font-h6 text-color-white">
                Условия оплаты
            </h6>
            <h6 className="font-h6 text-color-white">
                Вопрос-ответ
            </h6>
            <h6 className="font-h6 text-color-white">
                Блог
            </h6> 

          </div> 

          <div className={s.containerVertical}>

            <h5 className="font-h5 text-color-white">
                КОНТАКТЫ
            </h5>
            <h6 className="font-h6 text-color-white">
                Телефон: +90 531 07-17-684
            </h6>
            <h6 className="font-h6 text-color-white">
                Email: uleudesign@yandex.com
            </h6>
            <h6 className="font-h6 text-color-white">
                Адрес: 07130, Turkey, Antalya, Konyaalti
            </h6> 

          </div> 

        </div>

        <div className={s.containerHorizontal}> 
          <img className={s.logo} src={logo} alt="Логотип" />

          <h6 className="font-h6 text-color-white">
                © 2023 Uleuschool. All Rights Reserved.
          </h6>
        </div>

      </footer>
    );
  };
  
  export default Footer;