import React from 'react';
import PropTypes from 'prop-types';
import { act } from 'react-dom/test-utils';

class Autocomplete extends React.Component {
    static propTypes = {
        options: PropTypes.instanceOf(Array).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: ''
        };
    };

    onChange = (e) => {
        const { options } = this.props;
        const userInput = e.currentTarget.value;

        console.log(options);
        
        const filteredOptions = options.filter(
            (optionName) =>
            optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = (e) => {
        this.setState({
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: e.currentTarget.innerText
        });
    };

    onKeyDown = (e) => {
        const { activeOption, filteredOptions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeOption: 0,
                showOptions: false,
                userInput: filteredOptions[activeOption]
            });
        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            this.setState( {activeOption: activeOption - 1});
        } else if (e.keyCode === 40) {
            if (activeOption === filteredOptions.length - 1) {
                return;
            }
            this.setState({ activeOption: activeOption + 1});
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,

            state: { activeOption, filteredOptions, showOptions, userInput }
        } = this;

        let optionList;

        if (showOptions && userInput) {
            if (filteredOptions.length) {
                let count = 0;
                optionList = (
                    <ul className='options'>
                        {filteredOptions.map((optionName, index) => {
                            let className;
                            if (count < 5) {
                                count++;
                                if (index === activeOption) {
                                    className = 'option-active';
                                }
                                return (
                                    <li className='option-active' key={optionName} onClick={onClick}>
                                        {optionName}
                                    </li>
                                );
                            }
                        })}
                    </ul>
                );
            } else {
                optionList = (
                    <div className='no-options'>
                        <em>Class not found.</em>
                    </div>
                );
            }
        }

        return (
            <React.Fragment>
                <div className='search'>
                    <input 
                        type='text' 
                        className='search-box'
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput} 
                    />
                    <input type='submit' value='' className='search-btn' />
                </div>
                {optionList}
            </React.Fragment>
        )
    };
}

export default Autocomplete;