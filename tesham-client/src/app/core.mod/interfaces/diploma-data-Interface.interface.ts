export interface DiplomaDataInterface {
  diplomas: DiplomaInterface;
  totalCount: number;
}

export interface DiplomaInterface {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  diplomaName: string;
  shortDescription: string;
  diplomaDetails: DiplomaDetailsInterface;
  category: string;
  price: number;
  rating: number;
}

export interface DiplomaDetailsInterface {
  medias: {type: 'image' | 'video'; title: string; alt: string; url: string} [];
  diplomaDescription: {title: string; content: string, linkTo?: string};
  curriculum: DiplomaCurriculumInterface;
  reviews: any[];
  breadCrumb: {label: string; linkTo: 'diplomaDescription' | 'curriculum' | 'reviews'}[];
}

export interface DiplomaCurriculumInterface {
  title: string;
  subTitle: string;
  linkTo?: string;
  content: {title: string; subTitle: string; description: string; subCurriculum?: {title: string; subTitle: string; description: string, expand?: boolean}[]}[];
}
