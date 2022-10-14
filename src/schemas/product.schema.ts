import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from './base.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product extends BaseSchema {
    @Prop()
    name: string;

    @Prop()
    price: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);