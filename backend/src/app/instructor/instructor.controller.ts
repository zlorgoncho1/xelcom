import { Controller } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Instructor } from '../../entities/Instructor';

@ApiTags('Instructor')
@Crud({
  model: {
    type: Instructor,
  },
})
@Controller('instructor')
export class InstructorController implements CrudController<Instructor> {
  constructor(public service: InstructorService) {}
}
