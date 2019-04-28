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
  courseDetails: CourseDetailsInterface | string;
  category: string;
  price: number;
  rating: number;
}

export interface CourseDetailsInterface {
  medias: {type: 'image' | 'video'; title: string; alt: string; url: string} [];
  courseDescription: {title: string; content: string};
  curriculum: CourseCurriculumInterface;
  reviews: any[];
  breadCrumb: {label: string; linkTo: 'courseDescription' | 'curriculum' | 'reviews'}[];
}

export interface CourseCurriculumInterface {
  title: string;
  subTitle: string;
  content: {title: string; subTitle: string; description: string; subCurriculum?: {title: string; subTitle: string; description: string}[]}[];
}
