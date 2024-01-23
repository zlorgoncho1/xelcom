import { Injectable } from '@nestjs/common';
import { Event } from '../../entities/Event';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class EventService extends TypeOrmCrudService<Event> {
  constructor(@InjectRepository(Event) repo) {
    super(repo);
  }
}
