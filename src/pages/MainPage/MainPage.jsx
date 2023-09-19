import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/system';

import Button from '@mui/material/Button';
import MainGraficElement2 from "../../assets/images/MainGraficElement2.png";

const useStyles = makeStyles((theme) => ({
  mainFeaturesPost: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    textAlign: "center",
    padding: "100px 0 0 0"
  },

}));

function Variants() {
  const classes = useStyles();

  return (
    <section id="mainpage">
      <div className={classes.mainFeaturesPost}>

        <Container maxWidth="lg" sx={{ '& > *': { marginBottom: '30px' } }}>

          <p className="font-h2 text-color-white">
            ОТ ИГРОКА К МАСТЕРУ СОЗДАНИЯ ИГР: <br />
            ОБУЧЕНИЕ ЮНЫХ РАЗРАБОТЧИКОВ В ROBLOX STUDIO!
          </p>


          <p className="font-h6 text-color-white">
            Программа данного курса откроет вам путь ко всем секретам создания игр: от моделирования 3D объектов и
            дизайна локаций до написания сценариев и разработки пользовательского интерфейса.
          </p>


          <Button size='large' variant="contained" color='secondary' style={{ fontSize: "2rem " }}>

            <a href={`#freelesson`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <span style={{ fontSize: "inherit" }}>
                Бесплатный Пробный Урок
              </span>
            </a>

          </Button>

        </Container>

        <img className="" src={MainGraficElement2} alt="Баннер на главную" style={{ display: 'flex', maxWidth: '100%', marginRight: 0 }} />

      </div>

    </section>

  );
}

export default Variants;
