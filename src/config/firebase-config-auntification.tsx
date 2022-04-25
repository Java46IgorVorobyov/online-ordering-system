import React from "react";
import { GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";

export type Provider = {
    name: string,
    class: any,
    icon: React.ReactNode,
}

const socialMediaAuthorization: Provider[] = [
    {name: 'google', class: GoogleAuthProvider, icon: <GoogleIcon/>}
];

export default socialMediaAuthorization;