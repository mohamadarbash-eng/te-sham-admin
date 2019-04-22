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
  courseDetails: string | CourseDetailsInterface;
  category: string;
  price: number;
  rating: number;
}

export interface CourseDetailsInterface {
  imageAlt: string;
  imageUrl: string;
  courseDescription: string;
  curriculum: CourseCurriculumInterface;
  reviews: any[];
}

export interface CourseCurriculumInterface {
  title: string;
  subTitle: string;
  curriculum: CourseCurriculumInterface[];
}
