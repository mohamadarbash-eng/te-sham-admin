export interface CourseDataInterface {
  courses: CourseInterface;
  totalCount: number;
}

export interface CourseInterface {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  courseName: string;
  shortDescription: string;
  courseDetails: CourseDetailsInterface;
  category: string;
  price: number;
  rating: number;
}

export interface CourseDetailsInterface {
  medias: {type: 'image' | 'video'; title: string; alt: string; url: string} [];
  courseDescription: {title: string; content: string, linkTo?: string};
  curriculum: CourseCurriculumInterface;
  reviews: any[];
  breadCrumb: {label: string; linkTo: 'courseDescription' | 'curriculum' | 'reviews'}[];
}

export interface CourseCurriculumInterface {
  title: string;
  subTitle: string;
  linkTo?: string;
  content: {title: string; subTitle: string; description: string; subCurriculum?: {title: string; subTitle: string; description: string, expand?: boolean}[]}[];
}
