import React from 'react'
import './Button.css'
import propTypes from 'prop-types';

export default class Button extends React.Component {

    static propTypes = {
        label: propTypes.string,
        onClick: propTypes.func,
	};

	static defaultProps = {
		label: '',
		onClick: () => {},
    };
    
    render() {
        const style = {
            margin: '10px 10px 10px 0',
            height: 40,
            width:80,
        }
        return (
            <button
              className="button"
              style={style}
              onClick={this.props.onClick}>{this.props.label}</button>
          );
    }
  }
  
