import React from 'react';
import Category from './Category';

class MajorReq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c61a: 4,
            c61b: 4,
            c61c: 4,
            c70: 4,
            e16b: 4,
            design: 4,
            otherce: 16,
            elect: 7
        };

        this.waive = this.waive.bind(this);
    }

    waive(req) {
        alert("Not waivable");
        /*let swap;
        this.state[req] === 4 ? swap = 0 : swap = 4;
        this.setState({ [req]:swap })*/
    }

    render() {
        return (
            <div id='majorreq'>
                <h3>Under Division</h3>
                <div id='underdiv'>
                    <Category name='CS61A' id='c61a' units={this.state.c61a} waive={this.waive} />
                    <Category name='CS61B' id='c61b' units={this.state.c61b} waive={this.waive} />
                    <Category name='CS61C' id='c61c' units={this.state.c61c} waive={this.waive} />
                    <Category name='CS70' id='c70' units={this.state.c70} waive={this.waive} />
                    <Category name='EECS16B' id='e16b' units={this.state.e16b} waive={this.waive} />
                </div>
                <h3>Upper Division</h3>
                <div id='upperdiv'>
                    <Category name='Design Course' id='design' units={this.state.design} waive={this.waive} />
                    <Category name='CS/EE/EECS' id='otherce' units={this.state.otherce} waive={this.waive} />
                    <Category name='Technical Electives' id='elect' units={this.state.elect} waive={this.waive} />
                </div>
            </div>
        );
    }
}

export default MajorReq;