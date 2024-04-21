import React, { useEffect, useState } from 'react';
import SwipeableTemporaryDrawer from '../SwipableTemporaryDrawer';
import { Link } from 'react-router-dom'

export default function Intro() {
    const [currentFrame, setCurrentFrame] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentFrame(prevFrame => {
                if (prevFrame === 1) {
                    clearInterval(intervalId);
                    return prevFrame;
                } else {
                    return prevFrame + 1;
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='intro-box'>
            <SwipeableTemporaryDrawer />
            <Link to="/omne" className='intro-container' style={{ textDecoration: "none", color: "inherit" }}>
                {/* <div className='intro-frame' style={{ display: currentFrame === 1 ? 'block' : 'none' }}>
                    <img className='intro-img fade-in' src="./images/intro/1.svg" alt="illustration" />
                </div>
                <div className='intro-frame' style={{ display: currentFrame === 2 ? 'block' : 'none' }}>
                    <img className='intro-img fade-in' src="./images/intro/2_before.svg" alt="illustration" />
                    <img className='intro-img' src="./images/intro/1.svg" alt="illustration" />
                    <img className='intro-img fade-in' src="./images/intro/2_after.svg" alt="illustration" />
                </div> */}
                <div className='intro-frame' style={{ display: currentFrame === 1 ? 'block' : 'none' }}>
                    <img className='intro-img' src="./images/intro/2_before.svg" alt="illustration" />
                    <img className='intro-img' src="./images/intro/1.svg" alt="illustration" />
                    <img className='intro-img' src="./images/intro/2_after.svg" alt="illustration" />
                    <img className='intro-img' src="./images/intro/4.svg" alt="illustration" />
                    <img className='intro-img bounce' src="./images/intro/3.svg" alt="illustration" />    
                </div>
                {/* <div className='intro-frame' style={{ display: currentFrame === 2 ? 'block' : 'none' }}>
                    <img className='intro-img' src="./images/intro/2_before.svg" alt="illustration" />
                    <img className='intro-img' src="./images/intro/1.svg" alt="illustration" />
                    <img className='intro-img' src="./images/intro/2_after.svg" alt="illustration" />
                    <img className='intro-img' src="./images/intro/3.svg" alt="illustration" />
                    <img className='intro-img bounce' src="./images/intro/4.svg" alt="illustration" />
                </div> */}
            </Link>
        </div>
    );
}