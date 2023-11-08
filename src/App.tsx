import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './screen/Home';
import Predict from './screen/Predict';
import Tentang from './screen/Tentang';
import Panduan from './screen/Panduan';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-800">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="*" element={<Navigate to={'/home'} />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
};

export default App;
