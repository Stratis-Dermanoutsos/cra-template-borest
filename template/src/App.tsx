import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import NavbarCustom from 'components/NavbarCustom';
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';

const App = () => {
    return (
        <Router>
            <NavbarCustom />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </Router>
    );
};

export default App;