import { useRoutes } from 'react-router-dom';

import Mainpage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import Description from './pages/Description/Description';
import Price from './pages/Price/Price';
import Reviews from './pages/Reviews/Reviews';
import FreeLesson from "./pages/FreeLesson/FreeLesson"

export default function Router() {
  const routes = useRoutes([
      {
        path: "mainpage",
        element: <Mainpage />,        
      },
      {
        path: 'aboutpage',
        element: <AboutPage />,
      },
      {
        path: 'description',
        element: <Description />,
      },
      {
        path: 'price',
        element: <Price />,
      },
      {
        path: 'reviews',
        element: <Reviews />,
      },
      {
        path: 'freelesson',
        element: <FreeLesson />,
      },
      
  ]);
  
  return routes;
  }
