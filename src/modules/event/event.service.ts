import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MonngooseSchema } from 'mongoose';
import { ClickedLinkEvent, ClickedLinkEventDocument, ClickedLinkEventSchema, SignUpEvent, SignUpEventDocument, SignUpEventSchema } from '../../schemas';

@Injectable()
export class EventService {
    constructor(
        @InjectModel(ClickedLinkEvent.name) private clickedLinkEventModel: Model<ClickedLinkEventDocument>,
        @InjectModel(SignUpEvent.name) private signUpEventModel: Model<SignUpEventDocument>
    ) { }

    createClickedLinkEvent() {
        return new this.clickedLinkEventModel({
            time: new Date(),
            url: 'https://google.com'
        }).save();
    }

    createSignupEvent() {
        return new this.signUpEventModel({
            time: new Date(),
            user: 'Tom'
        }).save();
    }

    async updateClickedLinkEvent(id: MonngooseSchema.Types.ObjectId) {
        await this.clickedLinkEventModel.updateOne({
            _id: id
        }, {
            $set: {
                url: 'https://def.com'
            }
        })
        return this.clickedLinkEventModel.findById(id);
    }
}
