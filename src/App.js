import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StoreProvider } from "./store";
import 'swiper/swiper-bundle.css';
import 'aos/dist/aos.css'; // 引入 AOS 的 CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './pages/Home';

function App() {

  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
