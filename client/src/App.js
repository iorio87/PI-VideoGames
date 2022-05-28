import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicial from './Pages/Inicial';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
