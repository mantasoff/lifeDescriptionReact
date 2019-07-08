import React from 'react';
import './Explanation.css';
const Explanation = (props) => {

    if (props.company === 1) {
        return <div className="ui segment">
            <h1 className="ui center aligned header">1ClickFactory</h1>
            <div className="ui vertical center aligned">
                <div className="explanation">
                    <ul className="ui list">
                        <li>Software Upgrade projects</li>
                        <li>Software Development projects</li>
                        <li>Support</li>
                        <li>Organizer of the 2018 and 2019 1ClickFactory academies</li>
                        <li>Numerous full-day workshops done for partners and clients abroad</li>
                        <li>Participant and manager of hackathon events</li>
                    </ul>
                </div>

            </div>

        </div>
    }

    if (props.company === 2) {
        return <div className="ui segment">
            <h1 className="ui center aligned header">Microsoft</h1>
            <div className="ui vertical center aligned">
                <div className="explanation">
                    <ul className="ui list">
                        <li>Participation and event organization</li>
                    </ul>
                </div>

            </div>
        </div>
    }

    return <div>
        Nothing Has Been Chosen
    </div>
}

export default Explanation;