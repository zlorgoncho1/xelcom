import { Controller } from '@nestjs/common';
import { EventService } from './event.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Event } from '../../entities/Event';

@ApiTags('Event')
@Crud({
  model: {
    type: Event,
  },
})
@Controller('event')
export class EventController implements CrudController<Event> {
  constructor(public service: EventService) {}
}
