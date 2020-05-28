import React from 'react';
import Autocomplete from './Autocomplete';

class ClassesMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            courses: [],
            names: [],
            fullnames: []
        };
    }

    componentDidMount() {
      fetch("https://www.berkeleytime.com/api/catalog/catalog_json/?form=long")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              courses: result.courses,
              names: result.courses.map(course => course.abbreviation + " " + course.course_number + ": " + course.title)
            });

            /*result.courses.forEach(course => {
              let fetchId = "https://www.berkeleytime.com/api/catalog/catalog_json/course_box/?course_id=" + course.id;
              console.log(fetchId);
              fetch(fetchId)
                .then(res => res.json())
                .then(
                  (result) => {
                    var joined = this.state.fullnames.concat(result.title);
                    this.setState({
                      fullnames: joined 
                    });
                  }
                )
            })*/

          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
           this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }



    render() {
        var title = this.props.sem;
        console.log(this.state.fullnames);

        return (
            <div className='semester'>
                <h3 className='semesterTitle'>{title}</h3>
                <div className='courseunits'>
                    <div className='course'>Course</div>
                    <div className='units'>Units</div> 
                </div>
                <Autocomplete options={this.state.names} />
            </div>
        )
    }
}

export default ClassesMain;