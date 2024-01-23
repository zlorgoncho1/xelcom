import { Column, Entity, Index } from "typeorm";

@Index("review_pkey", ["uuid"], { unique: true })
@Entity("review", { schema: "public" })
export class Review {
  @Column("uuid", {
    primary: true,
    name: "uuid",
    default: () => "uuid_generate_v4()",
  })
  uuid: string;

  @Column("character varying", { name: "object", length: 30 })
  object: string;

  @Column("character varying", { name: "by", length: 255 })
  by: string;

  @Column("uuid", { name: "object_uuid" })
  objectUuid: string;

  @Column("character varying", { name: "title", length: 255 })
  title: string;

  @Column("text", { name: "content" })
  content: string;

  @Column("integer", { name: "stars" })
  stars: number;

  @Column("character varying", {
    name: "state",
    length: 20,
    default: () => "'ACTIVE'",
  })
  state: string;

  @Column("timestamp without time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp without time zone", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
