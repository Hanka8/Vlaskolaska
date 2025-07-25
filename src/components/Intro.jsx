import React from 'react';
import { Link } from 'react-router-dom'

import SwipeableTemporaryDrawer from './SwipableTemporaryDrawer';

export default function Intro() {
    return (
        <div className='intro-box'>
            <SwipeableTemporaryDrawer />
            <Link to="/omne" className='intro-container' style={{ textDecoration: "none", color: "inherit" }}>
                <img className='intro-img' src="./images/intro/logo.svg" alt="illustration" />
                <img className='intro-img bounce' src="./images/intro/text.svg" alt="illustration" />  
            </Link>
        </div>
    );
}