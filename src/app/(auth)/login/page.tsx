"use client";
import { useState } from "react";
import Link from "next/link";

import { login } from "@/services/auth";
import { AuthResponse } from "@/types/auth";
import Button from "@/ui/Button";
import { useRouter } from "next/navigation";

function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        const credentials = {
            email,
            password,
        };

        try {
            const data: AuthResponse = await login(credentials);

            if (data?.status === "success") {
                // set token
                localStorage.setItem("token", data.token);
                console.log(
                    `Login successful! Redirecting to ${
                        data.data.user.role.includes("admin") ? "Admin" : "Home"
                    } page`
                );

                if (data.data.user.role.includes("admin")) {
                    router.push("/admin");
                } else {
                    router.push("/");
                }
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form className="text-center sm:w-[350px] w-full space-y-5" onSubmit={handleLogin}>
            <h1 className="text-3xl">Login</h1>
            <div className="flex flex-col space-y-5">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-stone-300 focus-within:border-primary rounded-md h-10 px-3"
                    required
                    type="email"
                    placeholder="Email.."
                    name="email"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-2 border-stone-300 focus-within:border-primary rounded-md h-10 px-3"
                    required
                    type="password"
                    placeholder="Password..."
                    name="password"
                />
                <p className={`text-sm text-stone-500`}>
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-primary">
                        Sign up
                    </Link>
                </p>
            </div>
            <Button className="w-full" variant="primary" type="submit">
                Login
            </Button>
        </form>
    );
}

export default LoginPage;
