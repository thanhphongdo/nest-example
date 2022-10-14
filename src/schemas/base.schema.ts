import { Prop } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose'

export class BaseSchema {

    _id: MongooseSchema.Types.ObjectId;

    get id() {
        return this._id;
    }

    set id(_id: MongooseSchema.Types.ObjectId) {
        this._id = _id;
    }

    createdAt?: Date

    updatedAt?: Date
}