import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from './base.schema';

export type SignUpEventDocument = SignUpEvent & Document;

@Schema()
export class SignUpEvent extends BaseSchema {
    eventType: string;
    kind: string;
    time: Date;

    @Prop({ type: String, required: true })
    user: string;
}

export const SignUpEventSchema = SchemaFactory.createForClass(SignUpEvent);