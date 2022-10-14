import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from './base.schema';

export type ClickedLinkEventDocument = ClickedLinkEvent & Document;

@Schema()
export class ClickedLinkEvent extends BaseSchema {
    eventType: string;
    kind: string;
    time: Date;

    @Prop({ type: String, required: true })
    url: string;
}

export const ClickedLinkEventSchema = SchemaFactory.createForClass(ClickedLinkEvent);