"use client";

import { getToken } from "@/utils/token";
import { useEffect } from "react";

export function useUser() {
    const token = getToken("token");

    useEffect(() => {
        async function getMe() {
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

                return res.json;
            } catch (err: any) {
                console.log(err);
            }
        }

        getMe();
    }, [token]);
}
