export interface DiplomaInterface {
    imageAlt: string,
    imageUrl: string,
    imageTitle: string,
    courseName: string,
    title: string,
    shortDescription: string,
    courseDetails: DiplomaDetailsInterface,
    category: string,
    price: number,
    rating: string
    id: string
}

export interface DiplomaDetailsInterface {
    medias: DiplomaMediaInterface [],
    diplomaDescription: string,
    curriculum: string,
    reviews: [],
    breadCrumb: DiplomaBreadCrumbInterfaces[]
}


export interface DiplomaMediaInterface {
    type: 'image' | 'video',
    title: string,
    alt: string,
    url: {type: string, default: null},
}

export interface DiplomaBreadCrumbInterfaces {
    label: string,
    linkTo: 'diplomaDescription' | 'curriculum' | 'reviews'
}
