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
            elect: 7,
            total: 0
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
                        <div id='unireq'>
                            <div class='reqTitles'>University Requirements</div>
                            <Category name='Entry Level Writing' id='elwriting' units={this.state.elwriting} waivable={true} waive={this.waive} />
                            <Category name='American History' id='amhist' units={this.state.amhist} waivable={true} waive={this.waive} />
                            <Category name='American Institutions' id='aminst' units={this.state.aminst} waivable={true} waive={this.waive} />
                            <Category name='American Cultures' id='amcul' units={this.state.amcul} waivable={true} waive={this.waive} />
                        </div>
                        <div id='lsreq'>
                            <div class='reqTitles'>L&S Requirements</div>
                            <Category name='Reading & Composition (part 1)' id='r1a' units={this.state.r1a} waivable={true} waive={this.waive} />
                            <Category name='Reading & Composition (part 2)' id='r1b' units={this.state.r1b} waivable={true} waive={this.waive} />
                            <Category name='Quantitative Reasoning' id='quant' units={this.state.quant} waivable={true} waive={this.waive} />
                            <Category name='Foreign Language' id='forlang' units={this.state.forlang} waivable={true} waive={this.waive} />
                            <Category name='Arts & Literature' id='artlit' />
                            <Category name='Biological Science' id='biosci' />
                            <Category name='Historical Studies' id='histstud' />
                            <Category name='International Studies' id='intstud' />
                            <Category name='Philosophy & Values' id='phil' />
                            <Category name='Physical Science' id='phys' />
                            <Category name='Social & Behavioral Science' id='social' />
                        </div>
                        <div id='lowerdiv'>
                            <div class='reqTitles'>Lower Division</div>
                            <Category name='Computer Science 61A' id='c61a' />
                            <Category name='Computer Science 61B' id='c61b' />
                            <Category name='Computer Science 61C' id='c61c' />
                            <Category name='Computer Science 70' id='c70' />
                            <Category name='EECS16B' id='e16b' />
                        </div>
                        <div id='upperdiv'>
                            <div class='reqTitles'>Upper Division</div>
                            <Category name='Design Course' id='design' units={this.state.design} />
                            <Category name='Computer Science / Electrical Engineering / EECS' id='otherce' units={this.state.otherce} />
                            <Category name='Technical Electives' id='elect' units={this.state.elect} />
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