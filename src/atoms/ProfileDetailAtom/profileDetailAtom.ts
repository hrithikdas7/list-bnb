import { atom } from "jotai";

interface Profile {
    id: number;
    username: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    location: string | null;
    phone: string | null;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
}

export const profileAtom = atom<Profile>({
    id: 0,
    username: "",
    email: "",
    firstName: null,
    lastName: null,
    location: null,
    phone: null,
    provider: "",
    confirmed: false,
    blocked: false,
});

export const profileDetailAtom = atom((get) => get(profileAtom));