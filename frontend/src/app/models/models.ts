export type SocialNetWorkName =
  | 'FACEBOOK'
  | 'TWITTER'
  | 'LINKEDIN'
  | 'INSTAGRAM'
  | 'GITHUB';

export type ReviewType = 'COURSE' | 'INSTRUCTORS';

export type Star = 1 | 2 | 3 | 4 | 5;

export type UUID = string;

export interface Category {
  uuid: UUID;
  name: string;
}

export interface SocialLink {
  name: SocialNetWorkName;
  url: string;
}

export interface Lesson {
  uuid: UUID;
  numberOfLesson: string;
  title: string;
  textualContent: any;
  videoUrl: string;
}

export interface CoursSection {
  uuid: UUID;
  numberOfSection: string;
  name: string;
  lessonsUUIDs: UUID[];
}

export interface Review {
  object: ReviewType;
  by: string;
  objectId: string;
  title: string;
  content: string;
  stars: Star;
  isUseful: boolean[];
}

export type State = 'ACTIVE' | 'DESACTIVE' | 'ARCHIVER';

export interface Course {
  uuid: UUID;
  title: string;
  headline: string;
  description: string;
  coverUrl: string;
  instructor: UUID;
  categoriePrincipaleUUID: UUID;
  categoriesSecondairesUUIDs: UUID[];
  tags: string[];
  requirements: string[];
  level: string;
  skills: string[];
  language: string;
  sectionUUIDs: UUID[];
  duration: number;
  hasLifetimeAccess: boolean;
  accessDuration: number; // In month
  hasCertificat: number;
  certificatInfo: any;
  price: number;
  prixPromo: number;
  hasMoneyBackGarantee: boolean;
  numberOfDaysOfMoneyBackGarantee: number;
  reviewUUIDs: UUID[];
  numberOfEnrollement: number;
  currentNumberOfEnrollement: number;
  state: State;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  uuid: UUID;
  title: string;
  description: string;
  coverUrl: string;
  date: Date;
  location: string;
  speakerUUIDs: UUID[];
  categoryUUIDs: UUID[];
  tags: string[];
  skills: string[];
  eventContent: string[];
  language: string;
  gpsCoordinates: string;
  link: string;
  duration: number;
  price: number;
  totalSlot: number;
  bookedSlot: number;
  state: State;
  createdAt: Date;
  updatedAt: Date;
}

export interface Instructor {
  uuid: UUID;
  imageUrl: string;
  fullname: string;
  jobTitle: string;
  biography: string;
  socialLinkUUIDs: UUID[];
  reviewUUIDs: UUID[];
}
