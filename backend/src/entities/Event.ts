import { Column, Entity, Index } from "typeorm";

@Index("event_pkey", ["uuid"], { unique: true })
@Entity("event", { schema: "public" })
export class Event {
  @Column("uuid", {
    primary: true,
    name: "uuid",
    default: () => "uuid_generate_v4()",
  })
  uuid: string;

  @Column("character varying", { name: "title", length: 255 })
  title: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("character varying", { name: "cover_url", length: 255 })
  coverUrl: string;

  @Column("date", { name: "date" })
  date: string;

  @Column("uuid", { name: "speakers_uuids", array: true })
  speakersUuids: string[];

  @Column("uuid", { name: "category_uuids", array: true })
  categoryUuids: string[];

  @Column("varchar", { name: "tags", array: true })
  tags: string[];

  @Column("varchar", { name: "eventContent", array: true })
  eventContent: string[];

  @Column("character varying", { name: "language", length: 50 })
  language: string;

  @Column("character varying", {
    name: "gps_coordinates",
    length: 255,
    default: () => "'ONLINE'",
  })
  gpsCoordinates: string;

  @Column("character varying", { name: "link", length: 255 })
  link: string;

  @Column("integer", { name: "duration" })
  duration: number;

  @Column("integer", { name: "price" })
  price: number;

  @Column("integer", { name: "total_slot" })
  totalSlot: number;

  @Column("integer", { name: "booked_slot", default: () => "0" })
  bookedSlot: number;

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
