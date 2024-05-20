import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import SignupFormPage from './pages/SignupFormPage';
import RedirectPage from './pages/RedirectPage';

function App() {
    useEffect(() => {
        document.title = "Mark Divine Courage Foundation - Signup"
    }, []);

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" index element={<SignupFormPage />} />
            <Route path="/redirect" index element={<RedirectPage />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
