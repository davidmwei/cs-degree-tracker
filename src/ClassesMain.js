import React from 'react';

class ClassesMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            courses: [],
            names: []
        };

        this.populateNames = this.populateNames.bind(this);
    }

    componentDidMount() {
      fetch("https://www.berkeleytime.com/api/catalog/catalog_json/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              courses: result.courses,
              names: result.courses.map(course => result.courses.abbreviation + " " + result.courses.course_number)
            });
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

    populateNames() {
      
    }

    render() {
        var title = this.props.sem;
        console.log(this.state.courses);
        console.log(this.state.names);

        return (
            <div id='semester'>
                <h3>{title}</h3>
                Add classes here!
            </div>
        )
    }
}

export default ClassesMain;