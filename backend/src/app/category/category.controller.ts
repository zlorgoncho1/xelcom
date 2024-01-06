import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';

@Crud({
  model: {
    type: CategoryEntity,
  },
})
@Controller('category')
export class CategoryController implements CrudController<CategoryEntity> {
  constructor(public service: CategoryService) {}
}
