import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import Signout from './signout';

export default function Navbar() {

    return (
        <nav>
            < ShutterSpeedIcon sx={{fontSize: 60, color: 'white'}}/>
            <Signout />
        </nav>
        
    )
}