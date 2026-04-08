export type EnumLike<T> = T[keyof T];
export type EnumPick<T, K extends keyof T> = T[K]

export const owner = {
    DC: 'DC',
    Marvel: 'Marvel'
} as const;

export type TOwner = EnumLike<typeof owner>

export interface Hero {
    id: number;
    name: string;
    owner: TOwner;
}

export const heroes : Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: owner.DC,
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: owner.Marvel,
    },
    {
        id: 3,
        name: 'Superman',
        owner: owner.DC,
    },
    {
        id: 4,
        name: 'Flash',
        owner: owner.DC,
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: owner.Marvel
    },
];