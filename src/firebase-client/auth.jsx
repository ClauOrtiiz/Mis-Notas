import { collection, query, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
// doc,
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

    // ------------------------------------------------------

    const ref = () => query(collection(db, 'posts'));
    // Leer post
    const colPost = () => collection(db, 'posts');

    // crear post
    const post = (postText) => {
        //  Comprobar si el usuario está autenticado
        if (auth.currentUser) {
            const userEmail = auth.currentUser.email;
            addDoc(colPost(), {
                title: postText.title,
                text: postText.text,
                userEmail: auth.currentUser.email,
                date: new Date().toLocaleString(),
            });
            console.log("fecha que se agrega.", new Date().toLocaleString());
            console.log("Documento agregado con éxito.", userEmail);
        } else {
            console.log("El usuario no está autenticado. No se puede publicar el post.");
        }
    };

    // Editar post

    const editNote = (id, postText) => {
        const postRef = doc(db, 'posts', `${id}`);
        updateDoc(postRef, {
            title: postText.title,
            text: postText.text,
            date: new Date().toLocaleString()
        });
    };
    // Eliminar post

    const deleteDocData = (id) => {
        deleteDoc(doc(db, 'posts', `${id}`));
    };




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
        colPost,
        editNote,
        deleteDocData,
        // like,
        // disLike
    }

}
export default firebase