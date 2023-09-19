import { makeStyles } from "@mui/styles";

import Navbar from "./components/Navigation/Navigation"
import Mainpage from "./pages/MainPage/MainPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import RobloxPage from "./pages/RobloxPage/RobloxPage"
import Description from "./pages/Description/Description"
import Price from "./pages/Price/Price"
import FreeLesson from "./pages/FreeLesson/FreeLesson"
import Reviews from "./pages/Reviews/Reviews";
import Footer from "./pages/Footer/Footer";
import "./App.scss"

import { BrowserRouter } from 'react-router-dom';
import Router from './routes';


const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(180deg, rgb(59, 38, 103) 0%, rgb(188, 120, 236) 100%)',
    minHeight: '100vh', // Чтобы фон заполнил всю высоту 
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    gap: "100px"
  },
}));


function App() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <BrowserRouter>

        <Navbar />
        <Mainpage />
        <AboutPage />
        <RobloxPage />
        <Description />
        <Price />
        <FreeLesson />
        <Reviews />
        <Footer/>
        <Router />
        
      </BrowserRouter>

    </div>

  );
}

export default App;
