import { Injectable } from '@nestjs/common';
import { Category } from '../../entities/Category';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@dataui/crud-typeorm';

@Injectable()
export class CategoryService extends TypeOrmCrudService<Category> {
  constructor(@InjectRepository(Category) repo) {
    super(repo);
  }
}
