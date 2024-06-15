import { LoginInput, SignupInput } from "@/types/auth";

export async function login(credentials: LoginInput) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!res.ok) {
            const { message } = await res.json();
            throw new Error(message || "Failed to login");
        }

        return res.json();
    } catch (err: any) {
        console.log(err.message);
    }
}

export async function signup(credentials: SignupInput) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!res.ok) {
            const { message } = await res.json();
            throw new Error(message || "Failed to sign up");
        }

        return res.json();
    } catch (err: any) {
        console.log(err);
    }
}

export async function getMe() {
    const token = "";

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!res.ok) {
            const { message } = await res.json();
            throw new Error(message || "Failed to fetch user");
        }

        return res.json();
    } catch (err: any) {
        console.log(err);
    }
}
