import React from 'react';
import "./TwoWayDescription.css"
class TwoWayDescription extends React.Component {
    state = {
        DescriptionToggle: true
    }

    SetDesciption = (e, value) => {
        this.setState({
            DescriptionToggle: value
        })
    }

    DescriptionChoice = () => {
        if (this.state.DescriptionToggle) {
            return <div>
                A graduate, who has 3 years of ERP software development, academy organization, tutoring and workshop presentation experience in the Dynamics 365 eco-system, who is trying to relearn what it means to be interested in new technologies. I have been studying JavaScript. React. Redux, CSS for quite some time now and It is time to take my hobbies into the professional level.
            </div>
        } else {
            return <div>
                I sometimes call myself a software engineer who is too much into magic for a couple of reasons. The first reason is that I am proficient in what I do – if I get some type of challenge, that specific challenge will be solved in the most perfect manner as it is possible. The second reason is that the magic of software engineering is in the learning process itself – I enjoy going through the documentation of programming languages, looking through videos, and most importantly – I love to fail fast. This is one of the main parts why I am applying for the junior Front-End developer in your company – I want to participate in projects and I want to learn from all the professional people in this company. Due to my work experience, I have three years of experience of developing ERP systems in the Dynamics 365 Ecosystem. But development is not the only talent that I have: due to my organizational and communication skills, I have organized two company academies for incoming trainees and I have done numerous full-day workshops for partners and customers.  My next step, which started a couple of months ago is going into the world of front-end development and looking into what challenges does it bring. Currently, I am studying React with Redux – creating simple projects to get a hang of the main paradigms of front-end development and JavaScript. While I love having front-end development as a hobby, I think its time to take this hobby to the professional level and test myself out in new waters and challenges.
            </div>
        }
    }

    render() {
        return (
            <div>
                <div className="ui segment inverted vertical center aligned">
                    <div className="ui buttons massive">
                        <button onClick={(e) => this.SetDesciption(e, true)} className="ui inverted pink button">Short Description</button>
                        <div className="or inverted"></div>
                        <button onClick={(e) => this.SetDesciption(e, false)} className="ui inverted violet button massive" >Longer Description</button>
                    </div>
                </div>
                <div className="ui segment inverted vertical center aligned">
                    <div className="description-text ui text container">
                        <this.DescriptionChoice />
                    </div>
                </div>
            </div>
        )
    }
}

export default TwoWayDescription;