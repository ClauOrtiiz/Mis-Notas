/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import firebase from '../../firebase-client/auth';
import 'firebase/firestore';
import close from '../../assets/close.png';
import './edit.css'


const ModalEditProduct = ({ cancel, notes }) => {
    const token = localStorage.getItem('token');
    const [id, setId] = useState(notes.id);
    const [title, setTitle] = useState(notes.title);
    const [text, setText] = useState(notes.text);

    const editPost = async (e) => {
        e.preventDefault();

        firebase().editNote(id, {
            id:id,
            title:title,
            text:text,
            date:new Date().toLocaleString()
        });
        cancel();
    }

    return (
        <section className="modal-content-global">
            <div className="modal-content-edit">
                <p className="title-edit">Editando Nota</p>
                <figure className="box-close" onClick={cancel}>
                    <img src={close} className="close" alt="close" />
                </figure>
                <form className='content-form' onSubmit={editPost}>
                    <div className='item' >
                        <label>Titulo:</label>
                        <input className="inp-title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='item' >
                        <label>Nota:</label>
                        <textarea cols="25" rows="25" className="inp-text" type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                    <input type="submit" className="btn-save-edit" value="Guardar" />
                </form>
            </div>
        </section>
    );
};

export default ModalEditProduct;