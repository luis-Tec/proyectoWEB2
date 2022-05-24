import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import Gallery from './Gallery'
import Surff from './Surff';
export default function RouterPages() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/surff" element={<Surff/>} />
                </Routes>
            </Router>
        </div>
    )
}
