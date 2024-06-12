import { OptionsType } from "cookies-next/lib/types";

export const BASE_COOKIE_OPTIONS: OptionsType = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
};

export const ACCESS_TOKEN_COOKIE_NAME = "accessToken";

export const ACCESS_TOKEN_COOKIE_OPTIONS: OptionsType = {
    ...BASE_COOKIE_OPTIONS,
    maxAge: 30 * 24 * 60 * 60, // 30 days
};
