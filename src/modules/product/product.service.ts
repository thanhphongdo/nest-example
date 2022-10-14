import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../../schemas';

const productList = [
    {
        id: 1,
        name: 'Milk',
        price: 10
    },
    {
        id: 2,
        name: 'Fruit',
        price: 20
    },
    {
        id: 3,
        name: 'Cake',
        price: 12
    },
    {
        id: 4,
        name: 'Water',
        price: 6
    },
    {
        id: 5,
        name: 'Meat',
        price: 16
    }
];

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async findById(id: string) {
        return this.productModel.findById(id);
    }

    async findByName(name: string) {
        return this.productModel.find({
            name: {
                $regex: `${name}`,
                $options: 'i'
            }
        });
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async create(createCatDto: { name: string; price: number }): Promise<Product> {
        const createdCat = new this.productModel(createCatDto);
        return createdCat.save();
    }
}
