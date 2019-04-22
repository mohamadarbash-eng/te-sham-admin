export interface DiplomaDataInterfaceInterface {
  courses: DiplomInterface;
  totalCount: number;
}

export interface DiplomInterface {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  shortDescription: string;
  category: string;
  price: number;
  rating: number;
}
