import React from 'react';
import Explanation from './Explanation';
import InformationCards from './InformationCards';

class InformationCardsAndExplanation extends React.Component {
    state = {
        chosenCard: 0
    }

    chosenCard = (e, no) => {
        this.setState({
            chosenCard: no
        })
    }

    render() {
        return <div>
            <InformationCards chosenCard={this.chosenCard} />
            <Explanation company={this.state.chosenCard} />
        </div>
    }
}

export default InformationCardsAndExplanation;
