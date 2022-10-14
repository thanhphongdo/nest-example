import { Controller, Get, Param } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {

    constructor(private eventService: EventService) {

    }

    @Get('create-event')
    async createEvent() {
        const clickedEvent = await this.eventService.createClickedLinkEvent();
        const signUpEvent = await this.eventService.createSignupEvent();
        console.log(clickedEvent.createdAt);
        console.log(signUpEvent.createdAt);
        return {
            clickedEvent,
            signUpEvent
        }
    }

    @Get('update-clicked-link-event/:id')
    async updateEvent(@Param('id') id: string) {
        const clickedEvent = await this.eventService.updateClickedLinkEvent(id as any);
        return clickedEvent;
    }

}
