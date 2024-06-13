import { getMe } from "@/services/auth";
import { currentUserResponse } from "@/types/auth";

export async function useUser(token: string) {
    const res: currentUserResponse | null = await getMe(token);

    if (!res) {
        return null;
    }

    return { user: res.data.user };
}
