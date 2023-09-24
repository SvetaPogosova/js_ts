import {
    addCompanies,
    addNewBooksToUser,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanies, updateCompany,
    upgradeUserLaptop,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./immutability";

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'GGG',
        hair: 20,
        address: {
            city: 'city1',
            house: 12
        },
        laptop: {titleLaptop: 'Zen'}
    }

    const movedUser = moveUser(user, 'city2')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('city2')

})
test('upgrade laptop to mac', () => {
    let user: UserWithLaptopType = {
        name: 'GGG',
        hair: 20,
        address: {
            city: 'city1',
            house: 12
        },
        laptop: {titleLaptop: 'Zen'}
    }

    const copyUser = upgradeUserLaptop(user, 'Mac')

    expect(user).not.toBe(copyUser)
    expect(user.address).toBe(copyUser.address)
    expect(user.laptop).not.toBe(copyUser.laptop)
    expect(copyUser.laptop.titleLaptop).toBe('Mac')

})
test('move to other house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'GGG',
        hair: 20,
        address: {
            city: 'city1',
            house: 12
        },
        laptop: {titleLaptop: 'Zen'},
        books: ['css', 'js', 'react']
    }

    const movedUser = moveUserToOtherHouse(user, 15)

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.books).toBe(movedUser.books)
    expect(movedUser.address.house).toBe(15)

})
test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'GGG',
        hair: 20,
        address: {
            city: 'city1',
            house: 12
        },
        laptop: {titleLaptop: 'Zen'},
        books: ['css', 'js', 'react']
    }

    const movedUser = addNewBooksToUser(user, ['book1', 'book2'])

    expect(user).not.toBe(movedUser)
    expect(user.books).not.toBe(movedUser.books)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.books).toStrictEqual(['css', 'js', 'react', 'book1', 'book2'])
    expect(movedUser.books[3]).toBe('book1')
})
test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'GGG',
        hair: 20,
        address: {
            city: 'city1',
            house: 12
        },
        laptop: {titleLaptop: 'Zen'},
        books: ['css', 'js', 'react']
    }

    const movedUser = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(movedUser)
    expect(user.books).not.toBe(movedUser.books)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.books[1]).toBe('ts')
})
test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'GGG',
        hair: 20,
        address: {
            city: 'city1',
            house: 12
        },
        laptop: {titleLaptop: 'Zen'},
        books: ['css', 'js', 'react']
    }

    const movedUser = removeBook(user, 'js',)

    expect(user).not.toBe(movedUser)
    expect(user.books).not.toBe(movedUser.books)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.books[1]).toBe('react')
})
test('add companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'GGG',
        hair: 20,
        address: {
            city: 'city1',
            house: 12
        },
        laptop: {titleLaptop: 'Zen'},
        companies: [{id: 1, title: 'A'}, {id: 2, title: 'B'}]
    }

    const copyUser = addCompanies(user, {id: 3, title: 'C'})
    expect(user).not.toBe(copyUser)
    expect(copyUser.companies.length).toBe(3)
    expect(copyUser.companies[2].id).toBe(3)
    expect(copyUser.companies[2].title).toBe('C')

})
test('update companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'GGG',
        hair: 20,
        address: {
            city: 'city1',
            house: 12
        },
        laptop: {titleLaptop: 'Zen'},
        companies: [{id: 1, title: 'A'}, {id: 2, title: 'B'}]
    }

    const copyUser = updateCompanies(user, 2, 'Y')
    expect(user).not.toBe(copyUser)
    expect(user.companies).not.toBe(copyUser.companies)
    expect(copyUser.companies[1].title).toBe('Y')

})
test('update companies2', () => {
    let companies = {
        'GGG': [{id: 1, title: 'A'}, {id: 2, title: 'B'}],
        'HHH': [{id: 2, title: 'B'}]

    }

    const copy = updateCompany(companies, 'HHH', 2, 'Y')
    expect(copy['GGG']).toBe(companies['GGG'])
    expect(copy['HHH']).not.toBe(companies['HHH'])
    expect(copy['HHH'][0].title).toBe('Y')

})