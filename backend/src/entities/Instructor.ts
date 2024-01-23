import { Column, Entity, Index } from 'typeorm';

export type SocialNetWorkName =
  | 'FACEBOOK'
  | 'TWITTER'
  | 'LINKEDIN'
  | 'INSTAGRAM'
  | 'GITHUB';

@Index('instructor_pkey', ['uuid'], { unique: true })
@Entity('instructor', { schema: 'public' })
export class Instructor {
  @Column('uuid', {
    primary: true,
    name: 'uuid',
    default: () => 'uuid_generate_v4()',
  })
  uuid: string;

  @Column('character varying', {
    name: 'image_url',
    nullable: true,
    length: 255,
  })
  imageUrl: string | null;

  @Column('character varying', { name: 'fullname', length: 100 })
  fullname: string;

  @Column('character varying', { name: 'job_title', length: 100 })
  jobTitle: string;

  @Column('character varying', {
    name: 'biography',
    nullable: true,
    length: 255,
  })
  biography: string | null;

  @Column('jsonb', { name: 'social_links', nullable: true, array: true })
  socialLinks:
    | {
        name: SocialNetWorkName;
        url: string;
      }[]
    | null;

  @Column('uuid', { name: 'reviews_uuids', nullable: true, array: true })
  reviewsUuids: string[] | null;

  @Column('character varying', {
    name: 'state',
    length: 20,
    default: () => "'ACTIVE'",
  })
  state: string;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp without time zone', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
