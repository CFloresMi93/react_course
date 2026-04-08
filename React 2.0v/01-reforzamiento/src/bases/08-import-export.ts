import { heroes, type Hero, type TOwner} from "../data/heroes.data"


export const getHeroById = (id: number) : Hero | undefined => {
    return heroes.find(hero => hero.id === id)
}

export const getHeroesByOwner = (owner: TOwner ) : Hero[] => {
    return heroes.filter(hero => hero.owner === owner)
}