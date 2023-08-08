import {collection, query, addDoc} from 'firebase/firestore'
// updateDoc, doc, deleteDoc,  
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';


const firebase = () => {



    /* Ingresar con Google */
    const provider = new GoogleAuthProvider();
    const loginWithGoogle = () => signInWithPopup(auth, provider);

    /* Crear cuenta */
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    /* Ingreso con email y password */
    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const ref = () => query(collection(db, 'posts'));

    // crear post
    const post = async (postText) => {
        console.log({  text: postText,
            userEmail: auth.currentUser.email,
            likes: [],});
        await addDoc(colPost, {
            text: postText,
            userEmail: auth.currentUser.email,
            likes: [],
        });
    };

        // Leer post
        const colPost = collection(db, 'posts');
        
    // // Editar post

    // const editPost = (id, text) => {
    //     const postRef = doc(db, 'posts', `${id}`);
    //     updateDoc(postRef, {
    //         text,
    //     });
    // };

    // // Eliminar post

    // const deleteDocData = (id) => {
    //     deleteDoc(doc(db, 'posts', `${id}`));
    // };

    // // Dar Like
    // const like = (id, email) => {
    //     const postRef = doc(db, 'posts', `${id}`);
    //     updateDoc(postRef, {
    //         likes: arrayUnion(email),
    //     });
    // };

    // // Dislike
    // const disLike = (id, email) => {
    //     const postRef = doc(db, 'posts', `${id}`);
    //     updateDoc(postRef, {
    //         likes: arrayRemove(email),
    //     });



    return {

        loginWithGoogle,
        createUser,
        signIn,
        ref,
        post,
        // editPost,
        // deleteDocData,
        // like,
        // disLike
    }

}
export default firebase