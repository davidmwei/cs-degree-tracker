import React from 'react';

class Classes extends React.Component {
    render() {
        var title = this.props.sem;

        return (
            <div id='semester'>
                <h3>{title}</h3>
                Add classes here!
            </div>
        )
    }
}

export default Classes;