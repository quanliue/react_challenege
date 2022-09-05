interface Coordinate {
    lat: string
    lng: string
}

interface Company {
    name: string
    catchPhrase: string
    bs: string
}

interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Coordinate
}

export interface User {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

export interface UserAppState {
    users: User[],
    loading: boolean,
    error: boolean
}