import React from 'react';
import GradReq from './GradReq';
import MajorReq from './MajorReq';

class Board extends React.Component {
    render() {
        return (
            <div id='main'>
                <div id='intro'>
                    <h1 id='welcome'>UC Berkeley Computer Science Degree Scheduler</h1>
                    <p id='welcprompt'>something something something something info info info info</p>
                </div>
                <div id='requirementsContainer'>
                    <GradReq />
                    <MajorReq />
                </div>
                <div id='semesters'>
                    
                </div>
            </div>
        );
    }
}

export default Board;