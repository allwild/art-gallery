import { signOut } from "firebase/auth";
import app from "./firebase"
import auth from "./Auth"
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Signout() {

    const handleSignout = () => signOut(auth)

    return <div><Button variant="outlined" onClick={handleSignout} startIcon={<LogoutIcon />} sx={{color: "white", borderColor: "white", '&:hover': {border : "2px solid white"}}}>Sign out</Button></div>

}