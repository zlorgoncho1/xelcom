import { Column, Entity, Index } from 'typeorm';

@Index('category_pkey', ['uuid'], { unique: true })
@Entity('category', { schema: 'public' })
export class CategoryEntity {
  @Column('uuid', {
    primary: true,
    name: 'uuid',
    default: () => 'uuid_generate_v4()',
  })
  uuid: string;

  @Column('character varying', { name: 'name', length: 40 })
  name: string;
}
