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
                <strike class='category' onClick={() => this.props.waive(id)} style={{opacity: 0.25}}>
                    {name}: 0 
                </strike>
            )
        }

        return (
            <div class='category' onClick={() => this.props.waive(id)}>
                {name}: {units} 
            </div>
        )
    }
}

export default Category;