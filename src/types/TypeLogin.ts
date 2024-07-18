export interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    website: string;
    company: string;
}

export type UserList = User[];