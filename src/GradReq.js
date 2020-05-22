import React from 'react';
import Category from './Category';
import './index.css';

class GradReq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elwriting: 4,
            amhist: 4,
            aminst: 4,
            amcul: 4,
            r1a: 4,
            r1b: 4,
            artlit: 4,
            biosci: 4,
            histstud: 4,
            intstud: 4,
            phil: 4,
            phys: 4,
            social: 4
        };

        this.waive = this.waive.bind(this);
    }

    /* Thank you terrance for helping me figure this one out. */
    waive(req) {
        let swap;
        this.state[req] === 4 ? swap = 0 : swap = 4;
        this.setState({ [req]:swap })
    }

    render() {
        return (
            <div id='gradreq'>
                <h3>University & College Requirements</h3>
                <div id='unireq'>
                    <Category name='Entry Level Writing' id='elwriting' units={this.state.elwriting} waive={this.waive} />
                    <Category name='American History' id='amhist' units={this.state.amhist} waive={this.waive} />
                    <Category name='American Institutions' id='aminst' units={this.state.aminst} waive={this.waive} />
                    <Category name='American Cultures' id='amcul' units={this.state.amcul} waive={this.waive} />
                </div>
                <div id='lsreq'>
                    <Category name='Arts & Literature' id='artlit' units={this.state.artlit} waive={this.waive} />
                    <Category name='Biological Science' id='biosci' units={this.state.biosci} waive={this.waive} />
                    <Category name='Historical Studies' id='histstud' units={this.state.histstud} waive={this.waive} />
                    <Category name='International Studies' id='instud' units={this.state.intstud} waive={this.waive} />
                    <Category name='Philosophy & Values' id='phil' units={this.state.phil} waive={this.waive} />
                    <Category name='Physical Science' id='phys' units={this.state.phys} waive={this.waive} />
                    <Category name='Social & Behavioral Science' id='social' units={this.state.social} waive={this.waive} />
                </div>
            </div>
        )
    }

}

export default GradReq;