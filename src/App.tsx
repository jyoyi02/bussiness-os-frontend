
import LoginPage from './modules/Auth/pages/LoginPage';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Dashboard from './modules/Dashboard/pages/Dashboard';



export default function App() {
  return (
    <BrowserRouter basename="/business-os">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}