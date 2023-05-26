import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import auth from "./Auth"
import Button from "@mui/material/Button";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Login() {
    const handleLogin = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    return (

        <div className="outermost">

            <div className="outer">
                <span>The Art Gallery</span>
                <Button onClick={handleLogin} variant="contained">Sign in with Google</Button>
            </div>
            <div className="inner">
                <TwitterIcon sx={{fontSize: '5rem'}}/>
                <FacebookIcon sx={{fontSize: '5rem'}}/>
                <PinterestIcon sx={{fontSize: '5rem'}}/>
                <InstagramIcon sx={{fontSize: '5rem'}}/>
            </div>
        </div>
    )
}