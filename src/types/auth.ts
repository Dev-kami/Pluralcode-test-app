export interface LoginInput {
    email: string;
    password: string;
}

export interface SignupInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: ["user" | "admin"];
    __v: number;
}

export interface AuthResponse {
    status: string;
    token: string;
    data: {
        user: IUser;
    };
}

export interface currentUserResponse {
    status: string;
    data: {
        user: IUser;
    };
}
