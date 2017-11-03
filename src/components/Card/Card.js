import React from 'react'
import './Card.css'
import propTypes from 'prop-types';

export default class Card extends React.Component {

    static propTypes = {
        ID:propTypes.string,
        name:propTypes.string,
        description:propTypes.string,
        price:propTypes.number,
	};

	static defaultProps = {
        ID:'',
        name:'',
        description:'',
        price:0,
    };
    

    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.onChange = this.onChange.bind(this);
        this.inputs = {}
    }

    onChange(event) {
        const name = event.target.name;
        this.inputs[name]= event.target.value;
        this.props.onChangeQuantity(this.inputs)
    }

    render() {
        const style = {
            cardWrapper :{
                margin: '10px 10px 10px 10px',
                height: 180,
                width:180,
                backgroundColor:'#fff',
                borderRadius:4,
            },
            cardInner:{
               padding:8,
            },
            input: {
                padding:4
            }
        }
        const { ID, name, description, price } = this.props;
        return (
            <form style={{paddingHorizontal:32, paddingTop:8}}>
            <div>
                <div style={style.cardWrapper}>
                    <div style={style.cardInner}>
                        <p className="larg" style={{color:'blue'}}>{name}</p>
                        <p className="small">{description}</p>
                        <p className="small" style={{fontWeight:'600'}}>{`$${price}`}</p>
                    </div>
                </div>
                <div style={{paddingTop:16}}>
                    <label style={{color:'gray'}}>
                    Quantity
                    <input name={ID} style={style.input} type="number" onChange={this.onChange} onBlur={this.onBlur}></input>
                    </label>
                </div>
            </div>
             </form>

          );
    }
  }
  
