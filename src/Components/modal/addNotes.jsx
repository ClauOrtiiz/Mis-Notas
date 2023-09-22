/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import firebase from '../../firebase-client/auth';
import Close from '../../assets/close.png'
import './addNotes.css';

const addNotes = ({ cancel }) => {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    // const [existingNotes, setExistingNotes] = useState([]);

    const handleClick = async (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            try {
                firebase().post({ title, text });
                cancel();
                console.log('se guardo la nota correctamente');
            } catch (e) {
                console.log('Error al guardar nota', e)
            }
        } else {
            alert('Ingrese su nota');
        }

    }



    return (
        <section className='modalAdd-container-global'>
            <div className='modalAdd-content'>
                <figure className="box-close" onClick={cancel}>
                    <img src={Close} className="close" alt="close" />

                </figure>
                <form className='content-item ' onSubmit={handleClick}>
                    <p className='title-myNote'>Mi Nota</p>

                    <input className='title-add' type="text" name="" id="inp-title" placeholder='Titulo' onChange={(e) => setTitle(e.target.value)} ></input>

                    <textarea className='text-new' name="textarea" id="" cols="52" rows="10" placeholder='Empiece a escribir' onChange={(e) => setText(e.target.value)} ></textarea>

                    <div className='btn-save-item'>
                        <button className='btn-save'  type="onSubmit" >Guardar </button>
                    </div>
                </form>
            </div >
        </section >

    );
};

export default addNotes;