export interface CourseDataInterface {
courses: CourseInterface;
totalCount: number;
}

export interface CourseInterface {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  shortDescription: string;
  category: string;
  price: number;
  rating: number;
}
