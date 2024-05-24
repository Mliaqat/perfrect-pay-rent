import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/header';
import Home from './pages/home';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgotPassword';
import Register from './pages/auth/register';
import NavbarTest from './pages/NavbarTest';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/test" element={<NavbarTest />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
