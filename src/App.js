import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layout/header';
import Home from './pages/home';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgotPassword';
import Register from './pages/auth/register';

const App = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
