export interface Slide{
    id: string,
    title: string,
    content: string[],
    pictures: string[]
};

export interface Info{
    id: string,
    title: string,
    slides: Slide[]
}

export interface Category{
    id: string,
    title: string,
    information: Info[]
}

export interface Pages{
    id: string,
    title: string,
    categories: Category[]
}