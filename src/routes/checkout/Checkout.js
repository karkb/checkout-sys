import React, { Component } from 'react';
import './Checkout.css';
import { Button, Card } from '../../components'
import { customers, products } from '../../data';
import Checkout from '../../checkout';

const checkout = new Checkout();

export default class CheckoutView extends Component {
  constructor(props) {
    super(props);
    this.state ={
      customer: 'Default',
      productSold: [],
      total : 0,
    }
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.confirm = this.confirm.bind(this);

  }

  renderCustomer(){
    const result = customers.map((value, key)=>{
      return (
        <Button key={key} label={value} onClick={() => {this.setState({customer:value})}}/>
      );
    })
    return(
      <div className="cust">
        <p className="larg">
          Choose customer type
        </p>
        {result}
      </div>
    );
  }

  // each product quantity
  onChangeQuantity(quantity) {
    if (this.state.productSold.length === 0 ){
      this.setState({ productSold: [quantity] })
    }
    let objectsAreNotSame =0;
    // push distinct object props name
    this.state.productSold.forEach((value)=>{
      if(JSON.stringify(value) !== JSON.stringify(quantity)) {
        objectsAreNotSame+=1;
      }
      if(objectsAreNotSame === this.state.productSold.length ){
        this.setState({ productSold: [...this.state.productSold, quantity] })
      } else {
        this.setState({ productSold: [...this.state.productSold] })
      }
    
    })
  }


  renderProducts() {
    const result = products.map((value, key)=>{
      return(
        <Card onChangeQuantity={this.onChangeQuantity} key={key} {...value}/>
      );
    })
    return(
      <div className="ProdWrapper" style={{paddingTop:32}}>
         <p className="larg">
          Select your product
        </p>
        <div className="innerContainer">
          {result}
        </div>
      </div>
    );
  }

 


  confirm() {
    const total = checkout.calculate(this.state);
    this.setState({total:total})
  }

  render() {
    return (
      <div className="wrapper">
          {this.renderCustomer()}
          {this.renderProducts()}
          <div style={{paddingTop:32}}>
            <Button  label={'Confirm'} onClick={()=>{this.confirm()}} /> 
            <p className="larg" style={{fontWeight:'600',color:'blue'}}>
              {`Total price is: $${this.state.total}`}
            </p>
          </div>
      </div>
    );
  }
}
