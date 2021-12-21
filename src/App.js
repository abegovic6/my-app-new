import './App.css';
import { BrowserRouter, } from 'react-router-dom'
import  MainRouter from './router/mainRouter'
import Header from './router/header/header'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <MainRouter />
  </BrowserRouter>
  );
}

export default App;
