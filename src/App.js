import './App.css';
import Nav from './components/Nav';
import OneWay from './components/OneWay';
import Return from './components/Return';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<OneWay />} />
        <Route path='/return' element={<Return />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
