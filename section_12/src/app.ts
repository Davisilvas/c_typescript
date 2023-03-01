// Package Imports 
import {validate} from 'class-validator'

// code Imports
import { Product } from './product.model';

const newProd = new Product('', -190)
const newProd2 = new Product('Kingston 960gb ssd', 55)

validate(newProd).then(errors => {
    if(errors.length > 0){
        console.log('VALIDATION ERRORS')
        console.log(errors)
    } else {
        console.log(newProd.getInformation())
    }
})

validate(newProd2).then(errors => {
    if(errors.length > 0){
        console.log('VALIDATION ERRORS')
        console.log(errors)
    } else {
        console.log(newProd2.getInformation())
    }
})