export interface ICourse {
    id: number;
    title: string;
    description: string;
    lessonsCount: number;
    category: CategoryType;
    longDescription: string;
    imageUrl: string;
}
export enum CategoryType {
    beginners = 1,
    intermediate = 2,
    advanced = 3,
    other
}