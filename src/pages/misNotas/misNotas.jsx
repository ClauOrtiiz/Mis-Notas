/* eslint-disable react-hooks/rules-of-hooks */

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Logout from '../../Components/logout/logout';
import Logo from '../../Components/logo/logo';
import Plus from '../../assets/plus.png';
import ModalAddNotes from '../../Components/modal/addNotes';
import CardNotes from '../../Components/card/cardNotes';
import firebase from '../../firebase-client/auth';
import { onSnapshot } from 'firebase/firestore'
import 'firebase/firestore';
import './misNotas.css';


const notes = () => {
    const [showModalAddNotes, setShowModalAddNotes] = useState(false);
    const handleClickModalAddNotes = () => {
        setShowModalAddNotes(true);
    }

    const cancel = () => {
        setShowModalAddNotes(false);
    }


    const [existingNotes, setExistingNotes] = useState([]);

    useEffect(() => {
        console.log('aqui');
        onSnapshot(firebase().ref(), (snapshot) => {
            const data = [];
            snapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            setExistingNotes(data)
        });
    }, []);



    return (
        <div className="g-container">
            <header className='cotainer-logout'>
                <Logout></Logout>
            </header>
            <Logo></Logo>
            <main className='buttonAdd-container'>
                <button className='buttonAdd' onClick={handleClickModalAddNotes} >
                    <img src={Plus} className='icon-add' alt="add-product" /> </button>
            </main>
            {showModalAddNotes && <ModalAddNotes cancel={cancel} />}

            <CardNotes notes={existingNotes}></CardNotes>
        </ div>
    );
};

export default notes;