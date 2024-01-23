import { Column, Entity, Index } from "typeorm";

@Index("course_pkey", ["uuid"], { unique: true })
@Entity("course", { schema: "public" })
export class Course {
  @Column("uuid", {
    primary: true,
    name: "uuid",
    default: () => "uuid_generate_v4()",
  })
  uuid: string;

  @Column("character varying", { name: "title", length: 255 })
  title: string;

  @Column("character varying", { name: "headline", length: 255 })
  headline: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("character varying", { name: "cover_url", length: 255 })
  coverUrl: string;

  @Column("uuid", { name: "instructor_uuid" })
  instructorUuid: string;

  @Column("uuid", { name: "categorie_principale_uuids" })
  categoriePrincipaleUuids: string;

  @Column("uuid", {
    name: "categories_secondaires_uuids",
    nullable: true,
    array: true,
  })
  categoriesSecondairesUuids: string[] | null;

  @Column("varchar", { name: "tags", nullable: true, array: true })
  tags: string[] | null;

  @Column("varchar", { name: "requirements", nullable: true, array: true })
  requirements: string[] | null;

  @Column("character varying", { name: "level", nullable: true, length: 255 })
  level: string | null;

  @Column("varchar", { name: "skills", nullable: true, array: true })
  skills: string[] | null;

  @Column("character varying", { name: "language", nullable: true, length: 50 })
  language: string | null;

  @Column("jsonb", { name: "sections", array: true })
  sections: {
    numberOfSection: string;
    name: string;
    lessons: {
      numberOfLesson: string;
      title: string;
      textualContent: any;
      videoUrl: string;
    }[];
  }[];

  @Column("integer", { name: "duration" })
  duration: number;

  @Column("boolean", { name: "has_lifetime_access", default: () => "true" })
  hasLifetimeAccess: boolean;

  @Column("integer", { name: "access_duration", nullable: true })
  accessDuration: number | null;

  @Column("boolean", { name: "has_certificat", default: () => "false" })
  hasCertificat: boolean;

  @Column("jsonb", { name: "certificat_info", nullable: true })
  certificatInfo: object | null;

  @Column("integer", { name: "price" })
  price: number;

  @Column("integer", { name: "prix_promo" })
  prixPromo: number;

  @Column("boolean", {
    name: "has_money_back_garantee",
    default: () => "false",
  })
  hasMoneyBackGarantee: boolean;

  @Column("integer", {
    name: "number_of_days_of_money_back_garantee",
    nullable: true,
  })
  numberOfDaysOfMoneyBackGarantee: number | null;

  @Column("integer", { name: "number_of_enrollement", default: () => "0" })
  numberOfEnrollement: number;

  @Column("integer", {
    name: "current_number_of_enrollement",
    default: () => "0",
  })
  currentNumberOfEnrollement: number;

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
