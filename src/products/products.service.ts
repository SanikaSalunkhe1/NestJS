import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schemas';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name)  private readonly productModel : Model<Product>){}

    async createProduct(): Promise<Product> {
        const product = new this.productModel({
            title : 'Gaming laptop' , 
            tags : [
                { name : 'electronics'} , 
                { name : 'laptop'} , 
                { name : 'gaming'}
            ]
        })
        return product.save();
    }

    async getAllProducts() : Promise<Product[]> {
        return this.productModel.find();
    }
}
