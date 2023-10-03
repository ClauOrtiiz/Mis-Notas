/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import firebase from '../../firebase-client/auth';
import { onSnapshot } from 'firebase/firestore'
import 'firebase/firestore';
import ModalDelete from '../../Components/modal/delete';
import ModalEdit from '../../Components/modal/edit';
import ModalAddNotes from '../../Components/modal/addNotes';
import CardNotes from '../../Components/card/cardNotes';
import Logout from '../../Components/logout/logout';
import Logo from '../../Components/logo/logo';
import Plus from '../../assets/plus.png';
import './misNotas.css';

const notes = () => {

    const [showModalAddNotes, setShowModalAddNotes] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [selectedId, setSelectedId] = useState(null);


    //modales  
    const handleClickModalAddNotes = () => {
        setShowModalAddNotes(true);
    }
    const handleClickModalDelete = (id) => () => {
        setShowModalDelete(true);
        setSelectedId(id);
    }
    const handleClickModalEdit = (id) => () => {
        setShowModalEdit(true);
        setSelectedId(id);
    }
    const cancel = () => {
        setShowModalAddNotes(false);
        setShowModalDelete(false);
        setShowModalEdit(false);
    }

    //mostrar notas existentes 
    const [existingNotes, setExistingNotes] = useState([]);
    useEffect(() => {
        onSnapshot(firebase().ref(), (snapshot) => {
            const data = [];
            snapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            setExistingNotes(data)
        });
    }, []);


    // elimnar nota 
    const handleClickDelete = (e) => {
        e.preventDefault();
        try {
            if (selectedId) {
                firebase().deleteDocData(selectedId);
                console.log('Producto se eliminó correctamente');
                cancel();
            } else {
                console.log('No hay un ID válido seleccionado para eliminar');
            }
        } catch (error) {
            console.log('Error en la solicitud de eliminación del producto:', error);
            throw error;
        }
    }


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

            <CardNotes notes={existingNotes} clickModalDelete={handleClickModalDelete} clickModalEdit={handleClickModalEdit}></CardNotes>
            {showModalDelete && <ModalDelete handleClickDelete={handleClickDelete} cancel={cancel} />}
            {showModalEdit && <ModalEdit notes={existingNotes.find(note => note.id === selectedId)} cancel={cancel} />}
        </ div>
    );
};

export default notes;