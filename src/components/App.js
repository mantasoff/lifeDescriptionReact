import React from 'react';
import IntroScreen from './IntroScreen';
import TwoWayDescription from './TwoWayDescription';
import InformationCardsAndExplanation from './InformationCardsAndExplanation';

const App = () => {
    return (
        <div className="pusher">
            <IntroScreen />
            <TwoWayDescription />
            <InformationCardsAndExplanation />
            Hello!
        </div>
    )
}

export default App;