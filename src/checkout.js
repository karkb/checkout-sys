import { offers, products } from './data';

export default class Checkout {

	calculate(val) {
        const buyer = val.customer;
        let productName;
        let quantity;
        var total =0;
        var finalItems=[];

        val.productSold.forEach((product, key)=>{

            productName = Object.keys(product)[0];
            quantity = product[productName];
            // for default buyer
            finalItems.push({productName,quantity})

            if (buyer !== 'Default') {
                offers.forEach((offer)=>{
                    // privillige customer
                    if(offer.customer === buyer){
                        // loop the offers response
                        offer.offerItems.forEach((items)=>{
                            // loop each offer rules
                            items.rules.forEach((ruler)=>{
                                // loop each offer benefits
                                items.benefits.forEach((benefit)=>{
                                    if(quantity >= ruler.quantityForEach){
                                        // first offer type 
                                        if(benefit.freeProduct && benefit.freeProduct.quantity < 0) {
                                            var deductedQuantity = Math.abs(benefit.freeProduct.quantity) * quantity / ruler.quantityForEach;
                                            finalItems[key].quantity -= deductedQuantity ;
                                        // second offer type
                                        } else if(benefit.discount && benefit.discount.price) {
                                            finalItems[key].price= benefit.discount.price;
                                        }
                                    }
                                    // third offer type
                                    if (quantity >= ruler.quantityMoreThan) {
                                        finalItems[key].price= benefit.discount.price;
                                    }
                                })
                            })
                        })
                    }
                })
            }
           
        });

        return this.getTotalPrice(finalItems);
	}


    // to get total price for all kind of offers and buyer
    getTotalPrice(finalItems) {
        let total = 0;

        finalItems.forEach((finalItem)=>{
            products.forEach((item,key)=>{
                if(item.ID === finalItem.productName ) {
                    let price =0;
                    if(finalItem.price) {
                        price = finalItem.price
                    } else {
                        price = item.price
                    }
                     total += price*finalItem.quantity;
                } 
            })
        })

        return total;
        
    }

}
