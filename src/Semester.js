import React from 'react';

class Semester extends React.Component {
    constructor(props) {
        super(props);

        this.makeSems = this.makeSems.bind(this);
    }

    makeSems(item) {
        return <li>{item.text}</li>
    }

    render() {
        var semEntries = this.props.entries;
        var sems = semEntries.map(this.makeSems);

        return (
            <ul>
                {sems}
            </ul>
        )
    }
}

export default Semester;