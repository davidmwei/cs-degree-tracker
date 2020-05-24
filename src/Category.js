import React from 'react';

class Category extends React.Component {
    
    waive(id) {
        this.props.waive(id);
    }
    
    render() {
        var name = this.props.name;
        var id = this.props.id;
        var units = this.props.units;

        if (this.props.waivable) {
            if (units === 0) {
                return (
                    <strike class='waivable' onClick={() => this.waive(id)} style={{opacity: 0.25}}>
                        <div id='name'>{name}</div>
                    </strike>
                )
            }
            return (
                <div className='waivable' onClick={() => this.waive(id)}>
                    <div id='name'>{name}</div>
                </div>
            )
        }

        if (units === 0) {
            return (
                <strike class='category' style={{opacity: 0.25}}>
                    <div id='name'>{name}</div>
                    <div id='units'>{units}</div>
                </strike>
            )
        } else {
            return (
                <div className='category'>
                    <div id='name'>{name}</div>
                    <div id='units'>{units}</div>
                </div>
            )
        }
    }
}

function doNothing(id) {
    alert('Not waivable.');
}

Category.defaultProps = {
    name: 'empty',
    id: 'NA',
    units: '',
    waivable: false,
    waive: doNothing
};

export default Category;