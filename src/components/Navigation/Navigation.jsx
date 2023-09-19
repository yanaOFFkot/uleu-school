import React, { useState } from 'react';

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, 
         Container, Button, MenuItem, DialogTitle, DialogContent, 
         DialogContentText, TextField, Dialog, DialogActions } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../../assets/svg/logoDark.svg';
import s from './Navigation.module.scss';

const items = [
  {
    title: 'Главная',
    path: 'mainpage', 
  },
  {
    title: 'Об авторе',
    path: 'aboutpage', 
  },
  {
    title: 'Описание курса',
    path: 'description', 
  },
  {
    title: 'Стоимость',
    path: 'price', 
  },
  {
    title: 'Отзывы',
    path: 'reviews', 
  },
];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const [open,setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClickClose = () => {
    setOpen(false);
  }

  const [openReg,setOpenReg] = useState(false);

  const handleClickOpenReg = () => {
    setOpenReg(true);
  }

  const handleClickCloseReg = () => {
    setOpenReg(false);
  }

  return (
    <AppBar color="default" position="fixed" sx={{ height: "50px", justifyContent:"center" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <img className={s.logo} src={logo} alt="Логотип" style={{ display: { xs: 'none', md: 'flex' }, marginRight: 100 }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx = {{color:"white"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {items.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography className='font-h4 text-color-black uppercase' textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },}}>
            {items.map(item => (
              
                <Button
                  key={item.title}
                  sx={{ my: 3, color: 'white', display: 'block', marginRight: 3, fontSize: '12px' }}> 

                  <a href={`#${item.path}`}>
                        {item.title}
                  </a> 

                </Button>

            ))}
          </Box>

          <div>
            <Button variant="outlined" color="secondary" sx={{ my: 2, marginRight: 3, fontSize:"12px" }} onClick={handleClickOpen}>
              Вход
            </Button>

            <Dialog open={open} onClose={handleClickClose} aria-labelledby='logIn' maxWidth="xl">

              <DialogTitle id='logIn' sx={{ fontSize: 'h3.fontSize' }}>Вход</DialogTitle>
              <DialogContent>
                <DialogContentText sx={{ fontSize: 'h4.fontSize' }}>Для входа введите свой e-mail и пароль</DialogContentText>
                <TextField
                  autoFocus
                  margin='dense'
                  id="name"
                  label="Введите ваш e-mail"
                  type="email"
                  fullWidth
                  color="secondary"
                  size="medium"
                 />

                <TextField
                  autoFocus
                  margin='dense'
                  id="pass"
                  label="Введите пароль"
                  type="password"
                  fullWidth
                  color="secondary"
                  size="medium"
                 />
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClickClose} variant="contained" color='secondary' sx = {{fontSize:"14px" }}>Вход</Button>
                <Button onClick={handleClickClose} variant="outlined" color='secondary' sx = {{fontSize:"14px" }}>Отмена</Button>
              </DialogActions>

            </Dialog>

            <Button variant="contained" color="secondary" sx={{fontSize:"12px"}} onClick={handleClickOpenReg}>
              Регистрация
            </Button>

            <Dialog open={openReg} onClose={handleClickCloseReg} aria-labelledby='registration' maxWidth="xl">

              <DialogTitle id='registration' sx={{ fontSize: 'h3.fontSize' }}>Регистрация</DialogTitle>
              <DialogContent>
                <DialogContentText sx={{ fontSize: 'h4.fontSize' }}>Для регистрации заполните форму</DialogContentText>
                <TextField
                  autoFocus
                  margin='dense'
                  id="name"
                  label="ФИО"
                  type="text"
                  fullWidth
                  color="secondary"
                  size="medium"
                 />

                <TextField
                  autoFocus
                  margin='dense'
                  id="name"
                  label="Введите ваш номер телефона"
                  type="number"
                  fullWidth
                  color="secondary"
                  size="medium"
                 /> 

                <TextField
                  autoFocus
                  margin='dense'
                  id="name"
                  label="Введите ваш e-mail"
                  type="email"
                  fullWidth
                  color="secondary"
                  size="medium"
                 /> 

                <TextField
                  autoFocus
                  margin='dense'
                  id="pass"
                  label="Введите пароль"
                  type="password"
                  fullWidth
                  color="secondary"
                  size="medium"
                 />
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClickCloseReg} variant="contained" color='secondary' sx = {{fontSize:"14px" }}>Регистрация</Button>
                <Button onClick={handleClickCloseReg} variant="outlined" color='secondary' sx = {{fontSize:"14px" }}>Отмена</Button>
              </DialogActions>
              </Dialog>
          </div>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
