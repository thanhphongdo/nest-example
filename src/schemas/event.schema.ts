import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from './base.schema';
import { ClickedLinkEvent } from './click-link-event.schema';
import { SignUpEvent } from './sign-up-event.schema';

export type EventDocument = Event & Document;

@Schema({ discriminatorKey: 'kind', timestamps: true })
export class Event extends BaseSchema {
    @Prop({
        type: String,
        required: true,
        enum: [ClickedLinkEvent.name, SignUpEvent.name],
    })
    kind: string;

    @Prop({ type: Date, required: true })
    time: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);