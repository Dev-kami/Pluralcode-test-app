"use client";

import { currentUserResponse } from "@/types/auth";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type UserContextType = {
    user: currentUserResponse | null;
    setUser: (user: currentUserResponse | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<currentUserResponse | null>(null);

    useEffect(() => {
        async function getMe() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/me`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (!res.ok) {
                    const { message } = await res.json();
                    throw new Error(message || "Failed to fetch user");
                }

                const userData = await res.json();
                setUser(userData);
            } catch (err: any) {
                console.log(err);
                setUser(null); // Optional: reset user to null in case of error
            }
        }

        getMe();
    }, []);

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};

export { UserProvider, useUser };
