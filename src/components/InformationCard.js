import React from 'react';

const InformationCard = (props) => {
    return (
        <div onClick={(e) => props.chosenCard(e, props.company.companyNo)} className="ui link card">
            <div className="image">
                <img src={props.company.imageURL} />
            </div>
            <div className="content">
                <div className="header">
                    {props.company.name}
                </div>
                <div className="meta">
                    <span class="date">{props.company.period}</span>
                </div>
                <div className="description">
                    {props.company.jobName}
                </div>
            </div>
        </div>
    )
}

export default InformationCard;