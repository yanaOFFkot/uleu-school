import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

import s from "./Description.module.scss"


export default function ControlledAccordions() {

  const isSmallScreen = useMediaQuery('(max-width: 700px)');

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={s.scroll}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100vw', // Начальная ширина
            maxWidth: '1100px',
            margin: '0 auto', // Центрирование
          }}
        >

      <AccordionSummary
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',            
            maxWidth: '1100px',
        }}
        >
            <div style={{ width: '70%' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'}>
                    <span style={{ fontWeight: 'bold', margin:0 }}>
                        Модуль 0: Знакомство с Roblox Studio без программирования
                    </span>
                    <br />
                        для самых маленьких и тех, кто любит создавать игры без кода
                </Typography>
            </div>

            <div style={{ width: '15%' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} style={{ fontWeight: 'bold' }} sx={{ color: 'text.secondary' }}>12 уроков</Typography>
            </div>

            <div style={{ width: '20%'}}>
                <Button
                    size={isSmallScreen ? 'small' : 'large'}
                    variant="contained"
                    color="secondary"
                    style={{ margin: "5px", fontSize: "1.5rem",  
                    "@media (max-width: 800px)": {
                        fontSize: "1rem", 
                      }, 
                    }}
                >
                    Подробнее
                </Button>
            </div>

        </AccordionSummary>
        <AccordionDetails>
            <Typography component="div" variant={isSmallScreen ? 'h5' : 'h4'} sx={{ color: 'text.secondary', lineHeight: '1.5' }} style={{marginLeft:"20px"}}>
            <ul>
                <li>Урок 1. Объекты и параметры</li>
                <li>Урок 2. Интерактивные объекты</li>
                <li>Урок 3. Взаимодействия с объектами</li>
                <li>Урок 4. Источники света</li>
                <li>Урок 5. Источники звука</li>
                <li>Урок 6. Изображения</li>
                <li>Урок 7. Простые эффекты</li>
                <li>Урок 8. Сложные эффекты</li>
                <li>Урок 9. Персонажи</li>
                <li>Урок 10. Анимации</li>
                <li>Урок 11. Диалоги и Gui</li>
                <li>Урок 12. Интерактивное Gui</li>
            </ul>
            </Typography>
        </AccordionDetails>
        </Accordion>

        <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100vw', // Начальная ширина
            maxWidth: '1100px',
            margin: '0 auto', // Центрирование
          }}
        >
      <AccordionSummary
        aria-controls="panel2bh-content"
        id="panel2bh-header"
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'            
        }}
        >
            <div style={{ width: '70%' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'}>
                    <span style={{ fontWeight: 'bold', margin:0 }}>
                        Модуль 1: Знакомство с Roblox Studio и основы языка Lua
                    </span>
                </Typography>
            </div>

            <div style={{ width: '15%' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} sx={{ color: 'text.secondary' }}>
                    <span style={{ fontWeight: 'bold', margin:0 }}>
                        7 уроков
                    </span>
                    <br />
                        + 3 дополнительных урока
                </Typography>
            </div>

            <div style={{ width: '20%' }}>
                <Button size={isSmallScreen ? 'small' : 'large'} variant="contained" color="secondary" style={{ margin: "5px", fontSize: "1.5rem",  
                    "@media (max-width: 800px)": {
                        fontSize: "1rem", 
                      }, 
                    }}>
                    Подробнее
                </Button>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <Typography component="div" variant={isSmallScreen ? 'h5' : 'h4'} sx={{ color: 'text.secondary', lineHeight: '1.5' }} style={{marginLeft:"20px"}}>
            <ul>
                <li>Урок 1. Пробный урок. Знакомство с Roblox Studio</li>
                <li>Урок 2. Объекты и параметры</li>
                <li>Урок 3. Первая переменная</li>
                <li>Урок 4. Цикл for и Vector3</li>
                <li>Урок 4.1. Дополнительный материал</li>
                <li>Урок 5. Цикл while и условие if</li>
                <li>Урок 5.1. Дополнительный материал</li>
                <li>Урок 6. Функции и сервис Instance</li>
                <li>Урок 6.1. Дополнительный материал</li>
                <li>Урок 7. Создание простого obby с помощью полученных знаний. Настройка и публикация игры.</li>
            </ul>
            </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '1100px',
            '@media (max-width: 1120px)': {
            width: '70%', flexDirection: "column", alignItems: 'center',
            },
            '@media (max-width: 800px)': {
                width: '50%', flexDirection: "column", alignItems: 'center',
                },
        }}
        >
      <AccordionSummary
        aria-controls="panel3bh-content"
        id="panel3bh-header"
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100vw', // Начальная ширина
            maxWidth: '1100px',
            margin: '0 auto', // Центрирование
          }}
        >
            <div style={{ width: '70%' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'}>
                    <span style={{ fontWeight: 'bold', margin:0 }}>
                        Модуль 2: Методы, события, анимации, инструменты и аксессуары
                    </span>
                </Typography>
            </div>

            <div style={{ width: '15%' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} sx={{ color: 'text.secondary' }}>
                    <span style={{ fontWeight: 'bold', margin:0 }}>
                        13 уроков
                    </span>
                    <br />
                        + 4 дополнительных урока
                </Typography>
            </div>

            <div style={{ width: '20%'}}>
                <Button size={isSmallScreen ? 'small' : 'large'} variant="contained" color="secondary" style={{ margin: "5px", fontSize: "1.5rem",  
                    "@media (max-width: 800px)": {
                        fontSize: "1rem", 
                      }, 
                    }}>
                    Подробнее
                </Button>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <Typography component="div" variant={isSmallScreen ? 'h5' : 'h4'} sx={{ color: 'text.secondary', lineHeight: '1.5' }} style={{marginLeft:"20px"}}>
            <ul>
                <li>Урок 1. Методы объектов. Часть 1</li>
                <li>Урок 2. Методы объектов. Часть 2</li>
                <li>Урок 3. Методы объектов. Часть 3</li>
                <li>Урок 4. Методы объектов. Часть 4</li>
                <li>Урок 5. События компонента Part</li>
                <li>Урок 6. Обновление obby с помощью полученных знаний. Часть 1</li>
                <li>Урок 7. Сервис Players</li>
                <li>Урок 8. События объекта ClickDetector</li>
                <li>Урок 9. События объекта ProximityPrompt</li>
                <li>Урок 10. Компонент Tool</li>
                <li>Урок 11. Обновление obby с помощью полученных знаний. Часть 2</li>
                <li>Урок 12. Аксессуары</li>
                <li>Урок 13. Одежда</li>
                <li>Урок 14. Создание анимации</li>
                <li>Урок 15. Создание магазина с предметами. Часть 1</li>
                <li>Урок 16. Создание магазина с предметами. Часть 2</li>
                <li>Урок 17. Создание магазина с предметами. Часть 3</li>
            </ul>
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100vw', // Начальная ширина
            maxWidth: '1100px',
            margin: '0 auto', // Центрирование
          }}
        >
      <AccordionSummary
        aria-controls="panel4bh-content"
        id="panel4bh-header"
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'            
        }}
        >
            <div style={{ width: '70%' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'}>
                    <span style={{ fontWeight: 'bold', margin:0 }}>
                        Модуль 3:  Работа с компонентом Humanoid, таблицы и цикл foreach
                    </span>
                </Typography>
            </div>

            <div style={{ width: '15%' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} style={{ fontWeight: 'bold' }} sx={{ color: 'text.secondary' }}>11 уроков</Typography>
            </div>

            <div style={{ width: '20%'}}>
                <Button size={isSmallScreen ? 'small' : 'large'} variant="contained" color="secondary" style={{ margin: "5px", fontSize: "1.5rem",  
                    "@media (max-width: 800px)": {
                        fontSize: "1rem", 
                      }, 
                    }}>
                    Подробнее
                </Button>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <Typography component="div" variant={isSmallScreen ? 'h5' : 'h4'} sx={{ color: 'text.secondary', lineHeight: '1.5' }} style={{marginLeft:"20px"}}>
            <ul>
                <li>Урок 1. Создание персонажей</li>
                <li>Урок 2. События компонента Humanoid. Часть 1</li>
                <li>Урок 3. События компонента Humanoid. Часть 2</li>
                <li>Урок 4. Создание питомцев</li>
                <li>Урок 5. Создание летающих питомцев</li>
                <li>Урок 6. Общие события объектов</li>
                <li>Урок 7. Создание ездовых питомцев</li>
                <li>Урок 8. Таблицы</li>
                <li>Урок 9. Методы объектов</li>
                <li>Урок 10. Цикл foreach</li>
                <li>Урок 11. Обновление obby с помощью полученных знаний. Часть 3</li>
            </ul>
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100vw', // Начальная ширина
            maxWidth: '1100px',
            margin: '0 auto', // Центрирование
          }}
        >
      <AccordionSummary
        aria-controls="panel5bh-content"
        id="panel5bh-header"
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'            
        }}
        >
            <div style={{ width: '70%' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'}>
                    <span style={{ fontWeight: 'bold', margin:0 }}>
                        Модуль 4. Улучшение персонажей, ограничители и моделирование в Roblox Studio
                    </span>
                </Typography>
            </div>

            <div style={{ width: '15%' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} style={{ fontWeight: 'bold' }} sx={{ color: 'text.secondary' }}>9 уроков</Typography>
            </div>

            <div style={{ width: '20%'}}>
                <Button size={isSmallScreen ? 'small' : 'large'} variant="contained" color="secondary" style={{ margin: "5px", fontSize: "1.5rem",  
                    "@media (max-width: 800px)": {
                        fontSize: "1rem", 
                      }, 
                    }}>
                    Подробнее
                </Button>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <Typography component="div" variant={isSmallScreen ? 'h5' : 'h4'} sx={{ color: 'text.secondary', lineHeight: '1.5' }} style={{marginLeft:"20px"}}>
            <ul>
                <li>Урок 1. Создание неигровых персонажей (NPC)</li>
                <li>Урок 2. Создание враждебного NPC</li>
                <li>Урок 3. Создание питомца - защитника</li>
                <li>Урок 4. Изучение работы ограничителей. Часть 1</li>
                <li>Урок 5. Изучение работы ограничителей. Часть 2.</li>
                <li>Урок 6. Моделирование средствами Roblox</li>
                <li>Урок 7. Изучение работы ограничителей. Часть 3.</li>
                <li>Урок 8. Программирование воздушного шара.</li>
                <li>Урок 9. Сохранение и загрузка данных</li>
            </ul>
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100vw', // Начальная ширина
            maxWidth: '1100px',
            margin: '0 auto', // Центрирование
          }}
        >
      <AccordionSummary
        aria-controls="panel6bh-content"
        id="panel6bh-header"
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'            
        }}
        >
            <div style={{ width: '70%' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'}>
                    <span style={{ fontWeight: 'bold', margin:0 }}>
                        Модуль 5. Создание игровой карты: “Арена с монстрами”.
                    </span>
                </Typography>
            </div>

            <div style={{ width: '15%' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} style={{ fontWeight: 'bold' }} sx={{ color: 'text.secondary' }}>9 уроков</Typography>
            </div>

            <div style={{ width: '20%'}}>
                <Button size={isSmallScreen ? 'small' : 'large'} variant="contained" color="secondary" style={{ margin: "5px", fontSize: "1.5rem",  
                    "@media (max-width: 800px)": {
                        fontSize: "1rem", 
                      }, 
                    }}>
                    Подробнее
                </Button>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <Typography component="div" variant={isSmallScreen ? 'h5' : 'h4'} sx={{ color: 'text.secondary', lineHeight: '1.5' }} style={{marginLeft:"20px"}}>
            <ul>
                <li>Урок 1. Создание карты для битвы с монстрами</li>
                <li>Урок 2. Создание меча в Roblox Studio</li>
                <li>Урок 3. Программирование меча для битвы</li>
                <li>Урок 4. Создание монстра  в Roblox Studio</li>
                <li>Урок 5. Программирование монстра для битвы</li>
                <li>Урок 6. Создание ловушек в Roblox Studio</li>
                <li>Урок 7. Программирование ловушки</li>
                <li>Урок 8. Создание усилений для игрока в Roblox Studio</li>
                <li>Урок 9. Программирование усилений</li>
            </ul>
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100vw', // Начальная ширина
            maxWidth: '1100px',
            margin: '0 auto', // Центрирование
          }}
        >
      <AccordionSummary
        aria-controls="panel7bh-content"
        id="panel7bh-header"
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'            
        }}
        >
            <div style={{ width: '70%' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'}>
                    <span style={{ fontWeight: 'bold', margin:0 }}>
                    Модуль 6. Работа с элементами интерфейса. Изучение работы TweenService и клиент-серверных взаимодействий
                    </span>
                </Typography>
            </div>

            <div style={{ width: '15%' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} style={{ fontWeight: 'bold' }} sx={{ color: 'text.secondary' }}>10 уроков</Typography>
            </div>

            <div style={{ width: '20%'}}>
                <Button size={isSmallScreen ? 'small' : 'large'} variant="contained" color="secondary" style={{ margin: "5px", fontSize: "1.5rem",  
                    "@media (max-width: 800px)": {
                        fontSize: "1rem", 
                      }, 
                    }}>
                    Подробнее
                </Button>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <Typography component="div" variant={isSmallScreen ? 'h5' : 'h4'} sx={{ color: 'text.secondary', lineHeight: '1.5' }} style={{marginLeft:"20px"}}>
            <ul>
                <li>Урок 1. Знакомство с Gui</li>
                <li>Урок 2. Программирование элементов интерфейса</li>
                <li>Урок 3. Украшение и компоновка интерфейсов</li>
                <li>Урок 4. Сервис TweenService</li>
                <li>Урок 5. Создание загрузочного экрана</li>
                <li>Урок 6. Изучение работы Status-bar и его создание</li>
                <li>Урок 7. Обработка клавиш клавиатуры</li>
                <li>Урок 8. Использование мыши игрока</li>
                <li>Урок 9. Особенности и различия LocalScript и Script</li>
                <li>Урок 10. Компонент RemoteFunction</li>
            </ul>
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100vw', // Начальная ширина
            maxWidth: '1100px',
            margin: '0 auto', // Центрирование
          }}
        >
      <AccordionSummary
        aria-controls="panel8bh-content"
        id="panel8bh-header"
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'            
        }}
        >
            <div style={{ width: '70%' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'}>
                    <span style={{ fontWeight: 'bold', margin:0 }}>
                        Модуль 7. Проектные работы на тему клиент-серверных взаимодействий.
                    </span>
                </Typography>
            </div>

            <div style={{ width: '15%' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} style={{ fontWeight: 'bold' }} sx={{ color: 'text.secondary' }}>14 уроков</Typography>
            </div>

            <div style={{ width: '20%'}}>
                <Button size={isSmallScreen ? 'small' : 'large'} variant="contained" color="secondary" style={{ margin: "5px", fontSize: "1.5rem",  
                    "@media (max-width: 800px)": {
                        fontSize: "1rem", 
                      }, 
                    }}>
                    Подробнее
                </Button>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <Typography component="div" variant={isSmallScreen ? 'h5' : 'h4'} sx={{ color: 'text.secondary', lineHeight: '1.5' }} style={{marginLeft:"20px"}}>
            <ul>
                <li>Урок 1. Magic Wand. Создание инструмента</li>
                <li>Урок 2. Magic Wand. Создание UI и обработка клавиатуры</li>
                <li>Урок 3. Magic Wand. Клиент-серверное программирование инструмента</li>
                <li>Урок 4. Magic Wand. Создание заклинаний.</li>
                <li>Урок 5. Paint. Создание инструмента для рисования</li>
                <li>Урок 6. Paint. Создание заднего фона и области рисования</li>
                <li>Урок 7. Paint. Создание панели инструментов</li>
                <li>Урок 8. Paint. Создание вспомогательных скриптов</li>
                <li>Урок 9. Paint. Программирование рисования</li>
                <li>Урок 10. Игра мафия. Создание UI</li>
                <li>Урок 11. Игра мафия. Создание клиентского кода</li>
                <li>Урок 12. Игра мафия. Основные переменные и функции</li>
                <li>Урок 13. Игра мафия. Функции для персонажей</li>
                <li>Урок 14. Игра мафия. Функции выбывания и запуска игры</li>
            </ul>
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel9'}
        onChange={handleChange('panel9')}
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100vw', // Начальная ширина
            maxWidth: '1100px',
            margin: '0 auto', // Центрирование
          }}
        >
      <AccordionSummary
        aria-controls="panel9bh-content"
        id="panel9bh-header"
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'            
        }}
        >
            <div style={{ width: '70%' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'}>
                    <span style={{ fontWeight: 'bold', margin:0 }}>
                        Модуль 8. Способы монетазации в Roblox
                    </span>
                    <br />
                        для продвинутых учеников
                </Typography>
            </div>

            <div style={{ width: '15%' }}>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'} style={{ fontWeight: 'bold' }} sx={{ color: 'text.secondary' }}>5 уроков</Typography>
            </div>

            <div style={{ width: '20%'}}>
                <Button size={isSmallScreen ? 'small' : 'large'} variant="contained" color="secondary" style={{ margin: "5px", fontSize: "1.5rem",  
                    "@media (max-width: 800px)": {
                        fontSize: "1rem", 
                      }, 
                    }}>
                    Подробнее
                </Button>
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <Typography component="div" variant={isSmallScreen ? 'h5' : 'h4'} sx={{ color: 'text.secondary', lineHeight: '1.5' }} style={{marginLeft:"20px"}}>
            <ul>
                <li>Урок 1. Монетизация_1. Иммерсивная реклама</li>
                <li>Урок 2. Монетизация_2. Продукты разработчиков</li>
                <li>Урок 3. Монетизация_3. Пропуски (Passes)</li>
                <li>Урок 4. Монетизация_4. Engagement-Based выплаты</li>
                <li>Урок 5. Монетизация_5. Private Servers и платный доступ</li>
            </ul>
            </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}