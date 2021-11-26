import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import CreateProduct from './pages/CreateProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/create' element={ <CreateProduct /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
