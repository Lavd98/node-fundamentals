// const { getAge, getId } = require('../plugins');

// const obj = { name: 'Luis', birthdate: '1998-05-08'}

interface BuildMakePersonOptions {
    getId: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}
export const builMakePerson = ({ getId, getAge }: BuildMakePersonOptions) => {
    return ({ name, birthdate}: PersonOptions) => {
        return {
            id: getId(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}

// const luis = builPerson(obj);
// console.log(luis)

// const makeBuildPerson = () => {
//     return () 
// }
