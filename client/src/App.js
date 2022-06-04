import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicial from './Pages/Inicial';
import Home from './Pages/Home';
import Detail from './Pages/Detail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Inicial />} />
        <Route path='/home/detail/:id' element={<Detail />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
