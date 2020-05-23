import React from 'react';
import ReqPlanner from './ReqPlanner';

class Board extends React.Component {
    render() {
        return (
            <div id='main'>
                <div id='intro'>
                    <h1 id='welcome'>UC Berkeley Computer Science Degree Scheduler</h1>
                    <p id='welcprompt'>something something something something info info info info</p>
                </div>
                <div id='requirementsContainer'>
                    <ReqPlanner />
                </div>
                <div id='semesters'>
                
                </div>
            </div>
        );
    }
}

export default Board;