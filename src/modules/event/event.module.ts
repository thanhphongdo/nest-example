import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClickedLinkEvent, ClickedLinkEventSchema } from 'src/schemas/click-link-event.schema';
import { SignUpEvent, SignUpEventSchema } from '../../schemas/sign-up-event.schema';
import { EventSchema } from '../../schemas/event.schema';
import { EventController } from './event.controller';
import { EventService } from './event.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Event.name,
                schema: EventSchema,
                discriminators: [
                    { name: ClickedLinkEvent.name, schema: ClickedLinkEventSchema },
                    { name: SignUpEvent.name, schema: SignUpEventSchema },
                ],
            },
        ])
    ],
    controllers: [EventController],
    providers: [EventService]
})
export class EventModule { }
