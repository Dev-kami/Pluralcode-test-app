"use client";

export function getToken(name: string) {
    const token = localStorage.getItem(name);

    return token;
}

export function setToken(name: string, token: string) {
    localStorage.setItem(name, token);
}
