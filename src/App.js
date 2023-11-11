import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StoreProvider } from "./store";
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
