import './App.css';
import { Home } from './components/Home';
import { News } from './components/News';
import { Contribuyente } from './components/Contribuyente';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="contribuyente" element={<Contribuyente />} />
      </Route>
    </Routes>
  );
}

export default App;
