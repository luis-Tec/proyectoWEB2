import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeReact from './HomeReact';
import GalleryReact from './GalleryReact';
import SurffReact from './SurffReact';

export default function RouterPages() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeReact/>} />
                    <Route path="/gallery" element={<GalleryReact/>} />
                    <Route path="/surff" element={<SurffReact/>} />
                    
                    
                </Routes>
            </Router>
        </div>
    )
}
