interface User {
    id: number;
    name: string;
};

const users: User[] = [
    {
       id: 1,
       name: 'Fernando' 
    },
    {
        id: 2,
        name: 'Juan'
    },
    {
        id: 3,
        name: 'Pedro'
    }
];

export function getUserById( id: number, callback: (err?: string, user?: User) => void) {
    const user = users.find( function( user ) {
        return user.id === id;
    })

    if(!user){
        return callback(`User ${id} not found`);
    }

    return callback(undefined, user);
}