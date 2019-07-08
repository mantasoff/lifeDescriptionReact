import React from 'react';
import './IntroScreen.css';
import HeadImage from '../images/HeadImage.jpg';

const IntroScreen = () => {
    return (
        <div className="intro-screen ui inverted middle center aligned segment">
            <div className="intro-text ui text container middle aligned">
                <img className="ui centered medium circular image" src={HeadImage} alt="My Head"></img>
                <span>
                    <h1 className="ui inverted  middle aligned header">
                        Hi!
                    </h1>
                    <h1 className="ui inverted  middle aligned header">
                        I'm Mantas
                    </h1>

                </span>

            </div>
        </div>
    )
};

export default IntroScreen;