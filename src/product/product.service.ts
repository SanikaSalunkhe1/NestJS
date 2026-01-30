import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        { id : 1 , name : "Mobile" , price : 10000} , 
        { id : 2 , name : "Laptop" , price : 20000} , 
        { id : 3 , name : "TV" , price : 30000} , 
    ];

    //methods
    getAllProducts(){
        return this.products;
    }

    getProductById(id : number){
        return this.products.find((products) => products.id === id)
    }
}
