import React from 'react';
import InformationCard from './InformationCard';
import "./InformationCards.css"

const InformationCards = (props) => {

    let ClickFactoryDescription = {
        name: "1ClickFactory",
        period: "2016-2019",
        jobName: "NAV Developer",
        imageURL: "https://media.licdn.com/dms/image/C4D0BAQFCeM1VXqdwFQ/company-logo_200_200/0?e=2159024400&v=beta&t=Ym30dOkC5XJmx1YQM5x--uiOp7mJAiO7j83bIV0jVtA",
        companyNo: 1
    };

    let MicrosoftDescription = {
        name: "Microsoft Lietuva",
        period: "2016",
        jobName: "Volunteer",
        imageURL: "https://www.graphland.fr/wp-content/uploads/2017/12/Microsoft-Logo.png",
        companyNo: 2
    }


    return (
        <div className="information-cards ui centered segment">
            <div className="information-cards ui text container middle aligned">
                <span>
                    <h2 className="ui middle aligned header">Job Experience</h2>
                </span>

            </div>

            <div class="ui four column centered grid container">
                <div class="column centered row">
                    <div className="left floated column">
                        <div className="ui cards">
                            <InformationCard chosenCard={props.chosenCard} company={ClickFactoryDescription} />
                        </div>
                    </div>
                    <div className="right floated column">
                        <div className="ui cards">
                            <InformationCard chosenCard={props.chosenCard} company={MicrosoftDescription} />
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
};

export default InformationCards;