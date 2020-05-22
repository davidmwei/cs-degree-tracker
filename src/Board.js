import React from 'react';
import GradReq from './GradReq';

class Board extends React.Component {
    render() {
        return (
            <div id='main'>
                <div id='intro'>
                    <h1 id='welcome'>Welcome to the UC Berkeley Computer Science major degree tracker</h1>
                    <p id='welcprompt'>something something something something info info info info</p>
                </div>
                <GradReq />
            </div>
        );
    }
}

export default Board;