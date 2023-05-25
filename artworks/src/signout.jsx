import { signOut } from "firebase/auth";
import app from "./firebase"
import auth from "./Auth"
import Button from '@mui/material/Button';

export default function Signout() {

    const handleSignout = () => signOut(auth)

    return <div><Button variant="contained" onClick={handleSignout}>Sign out</Button></div>

}