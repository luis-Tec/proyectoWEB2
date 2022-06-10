import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeReact from './HomeReact';
import GalleryReact from './GalleryReact';
import SurffReact from './SurffReact';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Show from '../components/Show';

export default function RouterPages() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeReact/>} />
                    <Route path="/gallery" element={<GalleryReact/>} />
                    <Route path="/surff" element={<SurffReact/>} />
                    <Route path="/crud" element={<Show/>}/>
                    <Route path="/create" element={<Create/>}/>
                    <Route path="/edit:id" element={<Edit/>}/>
                    
                </Routes>
            </Router>
        </div>
    )
}
