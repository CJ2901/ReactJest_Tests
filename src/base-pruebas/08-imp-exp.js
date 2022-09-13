
const heroesList = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spider-man',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


export const getHeroeById = (id) => 
                            heroesList.find( (heroe) => heroe.id === id );

export const getHeroesByOwner = ( owner ) => 
                            heroesList.filter( (heroe) => heroe.owner === owner );
