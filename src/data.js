const customers = ['Default','UNILEVER','APPLE','NIKE','FORD'];

const products = [
    { ID:'classic', name:'Classic Ad', description:'Offers the most basic level of advertisement', price:269.99 },
    { ID:'standout', name:'Standout Ad', description:'Allows advertisers to use a company logo and use a longer presentation text', price:322.99 },
    { ID:'premium', name:'Premium Ad', description:'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility', price:394.99 },
];

const offers = [
    {
        ID:1,
        customer:'UNILEVER',
        offerItems: [
            { 
                ID: 1, 
                description: 'Gets a 3 for 2 deals on Classic Ads', 
                productID: 'classic',
                rules:[
                    {
                        quantityForEach:2,
                    },
                ],
                benefits:[
                    {
                        freeProduct:{
                            productID: 'classic',
                            quantity: +1,
                        },
                    },
                ],
            },
        ],
    },
    {
        ID:2,
        customer:'APPLE',
        offerItems: [
            { 
                ID: 1, 
                description: 'Gets a discount on Standout Ads up to $299.99 per ad.', 
                productID: 'standout',
                rules:[
                    {
                        quantityForEach:1,
                    },
                ],
                benefits:[
                    {
                        discount:{
                            productID: 'standout',
                            price: 299.99,
                        },
                    },
                ],
            },
        ],
    },
    {
        ID:3,
        customer:'NIKE',
        offerItems: [
            { 
                ID: 1, 
                description: 'Gets a discount on Premium Ads up to $379.99 per ad where 4 or more are purchased.', 
                productID: 'premium',
                rules:[
                    {
                        quantityMoreThan:4,
                    },
                ],
                benefits:[
                    {
                        discount:{
                            productID: 'premium',
                            price: 379.99,
                        },
                    },
                ],
            },
        ],
    },
    {
        ID:4,
        customer:'FORD',
        offerItems: [
            { 
                ID: 1, 
                description: 'Gets a 5 for 4 deals on Classic Ads', 
                productID: 'classic',
                rules:[
                    {
                        quantityForEach:4,
                    },
                ],
                benefits:[
                    {
                        freeProduct:{
                            productID: 'classic',
                            quantity: +1,
                        },
                    },
                ],
            },
            { 
                ID: 1, 
                description: 'Gets a discount on Standout Ads up to $309.99 per ad.', 
                productID: 'standout',
                rules:[
                    {
                        quantityForEach:1,
                    },
                ],
                benefits:[
                    {
                        discount:{
                            productID: 'standout',
                            price: 309.99,
                        },
                    },
                ],
            },
            {
                ID: 3, 
                description: 'Gets a discount on Premium Ads up to $389.99 per ad where 3 or more are purchased.', 
                productID: 'premium',
                rules:[
                    {
                        quantityMoreThan:3,
                    },
                ],
                benefits:[
                    {
                        discount:{
                            productID: 'premium',
                            price: 389.99,
                        },
                    },
                ],
            },
        ],
    },
];


export {
    customers,
    products,
    offers,

}