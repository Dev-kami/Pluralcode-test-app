"use client";

import React from "react";
import NavBar from "@/components/nav/NavBar";
import Button from "@/ui/Button";
import { useRouter } from "next/navigation";

const AboutPage = () => {
    const router = useRouter();
    return (
        <div>
            <NavBar />
            <div className="flex flex-col items-center h-screen pt-20">
                <h1>This is the about page</h1>
                <Button variant="primary" onClick={() => router.back()}>
                    Go back
                </Button>
            </div>
        </div>
    );
};

export default AboutPage;
