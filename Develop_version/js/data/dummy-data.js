export const alphabetPl = Array.from('AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUVWYZŹŻ');
export const alphabetUK = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
export const sentences = [
    "Fantomas",
    "Super Szamson",
    "Hasło",
    "Myszka",
    "Super bohaterowie",
    "Super pies",
    "Przyjaciel",
    "Kurs JavaScript",
    "Terminator",
    "Superman",
    "Herkules",
    "Batman",
    "Spiderman",
    "Kapitan Ameryka",
]
export const cities = [
    'Warsaw',
    'New York',
    'Washington',
    'Estets park',
    'Denver',
    'Los Angeles',
    'Las Vegas',
    'San francisco',
    'Saint petersburg',
    'Moscow',
    'Berlin',
    'Lisbon'
]
export const test = ['eee', 'aaaa', 'ea']
// export const artists = ['PICASSO', 'KLIMT', 'MONET', 'VAN GOGH', 'POLLOCK']
// export const artists = [
//     {
//         name: 'PICASSO',
//         prompt: 'decription'
//     },
//     {
//         name: 'KLIMT',
//         prompt: 'decription'
//     },
//     {
//         name: 'MONET',
//         prompt: 'decription'
//     },
//     {
//         name: 'VAN GOGH',
//         prompt: 'decription'
//     },
//     {
//         name: 'POLLOCK',
//         prompt: 'decription'
//     },
// ]
export const tarantinoFilmography = ['Pulp Fiction', 'Django Unchained', 'Once Upon a Time in Hollywood', 'Sin City', 'Kill Bill']

// export const popUpTopics = [ 'artists', 'cities', 'music', 'tarantino Filmography']
export const popUpTopics = [
    {
        id: 1,
        name: 'Artists',
        // content: ['PICASSO', 'KLIMT', 'MONET', 'VAN GOGH', 'POLLOCK'],
        content: [
            {
                id: 1,
                name: 'PICASSO',
                promt: 'some decrition'
            },
            {
                id: 2,
                name: 'KLIMT',
                promt: 'some decrition'
            },
            {
                id: 3,
                name: 'VAN GOGH',
                promt: 'some decrition'
            },
        ]
    },
    {
        id: 2,
        name: 'Test',
        content: ['eee', 'aaaa', 'ea']
    },
    {
        id: 3,
        name: 'Tarantino Filmography',
        content: ['Pulp Fiction', 'Django Unchained', 'Once Upon a Time in Hollywood', 'Sin City', 'Kill Bill']
    },
]