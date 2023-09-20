/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import firebase from '../../firebase-client/auth';
import Close from '../../assets/close.png'


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
                <form onSubmit={handleClick}>
                    <p>Agregando mi Nota</p>
                    <input type="text" name="" id="inp-title" placeholder='Titulo' onChange={(e) => setTitle(e.target.value)} ></input>
                    <textarea name="textarea" id="" cols="52" rows="10" placeholder='Empiece a escribir' onChange={(e) => setText(e.target.value)} ></textarea>
                    <button type="onSubmit" >Guardar </button>

                </form>
            </div>
        </section>

    );
};

export default addNotes;