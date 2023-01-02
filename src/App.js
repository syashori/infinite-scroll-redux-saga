import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import LogicalTest from './page/LogicalTest';
import DevelopmentTest from './page/DevelopmentTest';
import DetailFoto from './page/DetailFoto';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LogicalTest />} />
        <Route path='/dev-test' element={<DevelopmentTest />} />
        <Route path='/dev-test/:id' element={<DetailFoto />} />
      </Routes>
    </div>
  );
}

export default App;

