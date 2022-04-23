import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </Router>
    );
};

export default App;