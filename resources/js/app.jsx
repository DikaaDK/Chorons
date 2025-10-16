import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import BottomBar from './components/BottomBar';
import Navbar from './components/navbar';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Journal from './pages/journal';
import Profile from './pages/profile';

function Layout({ children }) {
    const location = useLocation();
    const isAuthPage = location.pathname === '/' || location.pathname === '/register';

    return (
        <div
            className={
                isAuthPage
                    ? 'min-h-screen bg-emerald-600 overflow-hidden'
                    : 'min-h-screen pt-16 bg-gray-50'
            }
        >
            {children}
            {!isAuthPage && (
                <>
                    <Navbar />
                    <BottomBar />
                </>
            )}
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/journal" element={<Journal />} />
                    <Route path="/add" element={<div>➕ Tambah Journal</div>} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
