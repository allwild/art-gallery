import { getAuth } from 'firebase/auth'
import app from './firebase'
import firebase from 'firebase/compat/app'



const auth = getAuth(app);
auth.setPersistence(firebase.auth.Auth.Persistence.NONE);

export default auth;