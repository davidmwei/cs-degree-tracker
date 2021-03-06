import React from 'react';
import Semesters from './Semesters';

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sems: [],
            cur: 1
        };
        
        this.addSem = this.addSem.bind(this);
    }
    
    addSem(i) {
        var newSem = {
            text: 'Semester ' + this.state.cur,
            key: this.state.cur
        };

        if (newSem.key > 10) {
            alert("You must graduate within 5 years at Cal.")
        } else {
            this.setState((prevState) => {
                return {
                    sems: prevState.sems.concat(newSem),
                    cur: this.state.cur + 1
                }
            })
        }
        i.preventDefault();
    }

    render() {
        return (
            <div id='schedulemain'>
                <form onSubmit={this.addSem}>
                    <button id='addSemButton' type="addSem">Add Semester</button>
                </form>
                <Semesters entries={this.state.sems} />
            </div>
        )
    }
}

export default Schedule;