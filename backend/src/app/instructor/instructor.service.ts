import { Injectable } from '@nestjs/common';
import { Instructor } from '../../entities/Instructor';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class InstructorService extends TypeOrmCrudService<Instructor> {
  constructor(@InjectRepository(Instructor) repo) {
    super(repo);
  }
}
