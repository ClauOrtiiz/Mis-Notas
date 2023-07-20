import { app } from '../firebase-client/firebase';
import { signInWithPopup, GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const firebase = () => {


    const auth = getAuth(app);

    /* Ingresar con Google */
    const provider = new GoogleAuthProvider();
    const loginWithGoogle = () => signInWithPopup(auth, provider);

    /* Crear cuenta */
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    /* Ingreso con email y password */
    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);




    return {
        loginWithGoogle,
        createUser,
        signIn,
    }
}

export default firebase