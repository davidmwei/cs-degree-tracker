import React from 'react';
import Category from './Category';
import Schedule from './Schedule';

class ReqPlanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elwriting: 4,
            amhist: 4,
            aminst: 4,
            amcul: 4,
            r1a: 4,
            r1b: 4,
            quant: 4,
            forlang: 4,
            artlit: 4,
            biosci: 4,
            histstud: 4,
            intstud: 4,
            phil: 4,
            phys: 4,
            social: 4,
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

    /* Thank you terrance for helping me figure this one out. */
    waive(req) {
        let swap;
        this.state[req] === 4 ? swap = 0 : swap = 4;
        this.setState({ [req]:swap })
    }

    render() {
        return (
            <div id='reqBody'>
                <div id='requirements'>
                    <div id='gradreq'>
                        <div id='unireq'>
                            <h3>University Requirements</h3>
                            <Category name='Entry Level Writing' id='elwriting' units={this.state.elwriting} waive={this.waive} />
                            <Category name='American History' id='amhist' units={this.state.amhist} waive={this.waive} />
                            <Category name='American Institutions' id='aminst' units={this.state.aminst} waive={this.waive} />
                            <Category name='American Cultures' id='amcul' units={this.state.amcul} waive={this.waive} />
                        </div>
                        <div id='lsreq'>
                            <h3>Letters & Sciences Requirements</h3>
                            <Category name='Reading & Composition (part 1)' id='r1a' units={this.state.r1a} waive={this.waive} />
                            <Category name='Reading & Composition (part 2)' id='r1b' units={this.state.r1b} waive={this.waive} />
                            <Category name='Quantitative Reasoning' id='quant' units={this.state.quant} waive={this.waive} />
                            <Category name='Foreign Language' id='forlang' units={this.state.forlang} waive={this.waive} />
                            <Category name='Arts & Literature' id='artlit' units={this.state.artlit} />
                            <Category name='Biological Science' id='biosci' units={this.state.biosci} />
                            <Category name='Historical Studies' id='histstud' units={this.state.histstud} />
                            <Category name='International Studies' id='intstud' units={this.state.intstud} />
                            <Category name='Philosophy & Values' id='phil' units={this.state.phil} />
                            <Category name='Physical Science' id='phys' units={this.state.phys} />
                            <Category name='Social & Behavioral Science' id='social' units={this.state.social} />
                        </div>
                    </div>
                    <div id='majorreq'>
                        <h2>Under Division</h2>
                        <div id='underdiv'>
                            <Category name='Computer Science 61A' id='c61a' units={this.state.c61a} />
                            <Category name='Computer Science 61B' id='c61b' units={this.state.c61b} />
                            <Category name='Computer Science 61C' id='c61c' units={this.state.c61c}/>
                            <Category name='Computer Science 70' id='c70' units={this.state.c70} />
                            <Category name='Electrical Engineering & Computer Science 16B' id='e16b' units={this.state.e16b} />
                        </div>
                        <h2>Upper Division</h2>
                        <div id='upperdiv'>
                            <Category name='Design Course' id='design' units={this.state.design} />
                            <Category name='Computer Science / Electrical Engineering / EECS' id='otherce' units={this.state.otherce} />
                            <Category name='Technical Electives' id='elect' units={this.state.elect} />
                        </div>
                    </div>
                </div>
                <div id='schedule'>
                    <Schedule />
                </div>
            </div>
        )
    }
}

export default ReqPlanner;