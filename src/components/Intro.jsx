import React, { useEffect, useState } from 'react';

export default function Intro() {
    const [currentFrame, setCurrentFrame] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentFrame(prevFrame => {
                if (prevFrame === 4) {
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
            <div className='intro-container'>
                <div className='intro-frame' style={{ display: currentFrame === 1 ? 'block' : 'none' }}>
                    <img className='intro-img fade-in' src="./images/intro/1.svg" alt="illustration" />
                </div>
                <div className='intro-frame' style={{ display: currentFrame === 2 ? 'block' : 'none' }}>
                    <img className='intro-img fade-in' src="./images/intro/2.svg" alt="illustration" />
                    <img className='intro-img' src="./images/intro/1.svg" alt="illustration" />
                </div>
                <div className='intro-frame' style={{ display: currentFrame === 3 ? 'block' : 'none' }}>
                    <img className='intro-img' src="./images/intro/2.svg" alt="illustration" />
                    <img className='intro-img' src="./images/intro/1.svg" alt="illustration" />
                    <img className='intro-img bounce' src="./images/intro/3.svg" alt="illustration" />
                </div>
                <div className='intro-frame' style={{ display: currentFrame === 4 ? 'block' : 'none' }}>
                    <img className='intro-img' src="./images/intro/2.svg" alt="illustration" />
                    <img className='intro-img' src="./images/intro/1.svg" alt="illustration" />
                    <img className='intro-img' src="./images/intro/3.svg" alt="illustration" />
                    <img className='intro-img bounce' src="./images/intro/4.svg" alt="illustration" />
                </div>
            </div>
            <p className='intro-quote fade-in' style={{ display: currentFrame === 4 ? 'block' : 'none' }} >Tvorbou z lásky jsou svou nejlepší verzí všechny krásky.</p>
        </div>
    );
}
