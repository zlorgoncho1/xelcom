export interface Category {
  uuid: string;
  name: string;
}

export type SocialNetWorkName =
  | 'FACEBOOK'
  | 'TWITTER'
  | 'LINKEDIN'
  | 'INSTAGRAM'
  | 'GITHUB';

export interface SocialLink {
  name: SocialNetWorkName;
  url: string;
}

export interface Instructor {
  uuid: string;
  imageUrl: string;
  fullname: string;
  jobTitle: string;
  biography: string;
  socialLinks: SocialLink[];
  Reviews: Review[];
}

export interface Lesson {
  uuid: string;
  numberOfLesson: string;
  title: string;
  textualContent: any;
  videoUrl: string;
}

export interface CoursSection {
  uuid: string;
  numberOfSection: string;
  name: string;
  lessons: Lesson[];
}

export type ReviewType = 'COURSE' | 'INSTRUCTORS';

export type Star = '1' | '2' | '3' | '4' | '5';

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
  uuid: string;
  title: string;
  headline: string;
  description: string;
  coverUrl: string;
  instructor: Instructor;
  categoriePrincipale: Category;
  categoriesSecondaires: Category[];
  tags: string[];
  requirements: string[];
  level: string;
  skills: string[];
  language: string;
  content: CoursSection[];
  duration: number;
  hasLifetimeAccess: boolean;
  accessDuration: number; // In month
  hasCertificat: number;
  certificatInfo: any;
  price: number;
  prixPromo: number;
  hasMoneyBackGarantee: boolean;
  numberOfDaysOfMoneyBackGarantee: number;
  reviews: Review[];
  numberOfEnrollement: number;
  currentNumberOfEnrollement: number;
  state: State;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  uuid: string;
  title: string;
  description: string;
  coverUrl: string;
  date: Date;
  location: string;
  speakers: Instructor[];
  categories: Category[];
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
