"use client";
import Button from "@/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { signup } from "@/services/auth";
import { useRouter } from "next/navigation";
import { AuthResponse } from "@/types/auth";

function SignUpPage() {
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const credentials = {
            firstName,
            lastName,
            email,
            password,
        };

        try {
            const data: AuthResponse = await signup(credentials);

            if (data?.status === "success") {
                localStorage.setItem("token", data.token);

                console.log(
                    `Sign up successful! Redirecting to ${
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
        <form className="text-center sm:w-[350px] w-full space-y-5" onSubmit={handleSignUp}>
            <h1 className="text-3xl">Sign Up</h1>
            <div className="flex flex-col space-y-5">
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border-2 border-stone-300 focus-within:border-primary rounded-md h-10 px-3"
                    required
                    type="text"
                    placeholder="John"
                    name="firstName"
                />
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border-2 border-stone-300 focus-within:border-primary rounded-md h-10 px-3"
                    required
                    type="text"
                    placeholder="Doe"
                    name="lastName"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-stone-300 focus-within:border-primary rounded-md h-10 px-3"
                    required
                    type="email"
                    placeholder="you@example.com"
                    name="email"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-2 border-stone-300 focus-within:border-primary rounded-md h-10 px-3"
                    required
                    type="password"
                    placeholder="********"
                    name="password"
                />

                <p className="text-sm text-stone-500">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary">
                        Login
                    </Link>
                </p>
            </div>
            <Button className="w-full" variant="primary" type="submit">
                Sign Up
            </Button>
        </form>
    );
}

export default SignUpPage;
