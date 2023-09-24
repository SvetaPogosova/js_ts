export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house: number
    }
}
export type LaptopType = {
    titleLaptop: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: string[]
}
export type WithCompaniesType = UserType & {
    companies: CompanyType[]
}
export type CompanyType = {
    id: number,
    title: string
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, city}}
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, address: {...u.address, house}}
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {...u, laptop: {...u.laptop, titleLaptop: laptop}}
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: string[]) {
    return {...u, books: [...u.books, ...books]}
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u, books: u.books.map(el => el === oldBook ? newBook : el)
    }
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, book: string) => ({
    ...u, books: u.books.filter(el => el !== book)
})
export const addCompanies = (u: UserWithLaptopType & WithCompaniesType, newCompanies: {
    id: number,
    title: string
}) => ({...u, companies: [...u.companies, newCompanies]})
export const updateCompanies = (u: WithCompaniesType, id: number, title: string) =>
    ({
        ...u, companies: u.companies.map(el => el.id === id ? {...el, title} : el)
    })
export const updateCompany =
    (companies: { [key: string]: CompanyType[] },
     name: string, id: number, title: string) =>
        ({...companies, [name]: {...companies[name].map(el => el.id === id ? {...el, title} : el)}})


