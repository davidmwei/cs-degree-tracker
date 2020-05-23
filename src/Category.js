import React from 'react';

class Category extends React.Component {
    
    waive(id) {
        this.props.waive(id);
    }
    
    render() {
        var name = this.props.name;
        var id = this.props.id;
        var units = this.props.units;

        

        if (units === 0) {
            return (
                <strike class='category' onClick={() => this.waive(id)} style={{opacity: 0.25}}>
                    <div id='name'>{name}</div>
                    <div id='units'>{units}</div>
                </strike>
            )
        }

        return (
            <div className='category' onClick={() => this.waive(id)}>
                <div id='name'>{name}</div>
                <div id='units'>{units}</div>
            </div>
        )
    }
}

function doNothing(id) {
    alert('Not waivable.');
}

Category.defaultProps = {
    name: 'empty',
    id: 'NA',
    units: 'NA',
    waive: doNothing
};

export default Category;