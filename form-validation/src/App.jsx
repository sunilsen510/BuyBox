import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';  
import ProfOfFundsPage from './Pages/ProfOfFundsPage';
import './App.css';
import DriverPage from './Pages/DriverPage';
import BussinessPage from './Pages/BussinessPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/proofoffunds' element={<ProfOfFundsPage />} />
          <Route path='/driverpage' element={<DriverPage />} />
          <Route path='/bussiness' element={<BussinessPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

