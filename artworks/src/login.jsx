import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import auth from "./Auth"
import Button from "@mui/material/Button";

export default function Login() {
    const handleLogin = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    return <Button onClick={handleLogin} variant="contained">Sign in with Google</Button>
}