import { User } from "firebase/auth";

export interface HeaderProps{
    user: User | null;
    handleSignOut: () => void,
}