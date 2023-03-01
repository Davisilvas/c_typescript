import _ from 'lodash';
// declare var GLOBAL: string;
// console.log(_.shuffle([1,2,3,7]))
// console.log(GLOBAL)
const products = [
    { title: 'Mechanical Keyboard', price: 75.99 },
    { title: 'Wireless Mouse', price: 35.99 }
];
const p1 = new Product('book', 99)
console.log(p1.getInformation())

// *** hardCode resolution ***
// const loadedProduct = products.map(
//     prod => {
//         return new Product(prod.title, prod.price)
//     }
// )

// for (const prod of loadedProduct){
//     console.log(prod.getInformation())
// }

// *** class-transformer  resolution ***
import "reflect-metadata"
import { plainToInstance } from 'class-transformer'
import { Product } from './product.model';

const loadedProduct = plainToInstance(Product, products)
for (const prod of loadedProduct){
    console.log(prod.getInformation())
}
