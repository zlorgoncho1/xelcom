import { Controller } from '@nestjs/common';
import { CourseService } from './course.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Course } from '../../entities/Course';

@ApiTags('Course')
@Crud({
  model: {
    type: Course,
  },
})
@Controller('course')
export class CourseController implements CrudController<Course> {
  constructor(public service: CourseService) {}
}
