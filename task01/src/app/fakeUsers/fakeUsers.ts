interface User {
    id: number,
    name: string,
    age: number,
    descr?: string,
    status: 'online' | 'offline' | 'away' | 'busy'
}

const fakeUsers: User[] = [
    {
        id: 1,
        name: 'Simon',
        age: 25,
        descr: 'Hi I Simon',
        status: 'online'
    },
    {
        id: 2,
        name: 'Peter',
        age: 24,
        status: 'away'
    },
    {
        id: 3,
        name: 'Jack',
        age: 23,
        descr: 'peace fellows',
        status: 'busy'
    },
    {
        id: 4,
        name: 'Bill',
        age: 22,
        descr: 'hungry :(',
        status: 'offline'
    },
    {
        id: 5,
        name: 'BALAKRISHNA',
        age: 21,
        descr: 'India the best',
        status: 'online'
    }
];

export { User, fakeUsers }
