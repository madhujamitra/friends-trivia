
import './App.scss';
import HomePage from './pages/Homepage';
import QuotesPage from './pages/QuotesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<HomePage />} />;
    <Route path="/Quotes" element={<QuotesPage />} />;
    </Routes>


    </div>
    </BrowserRouter>
  );
}

export default App;
