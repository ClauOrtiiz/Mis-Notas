import { useState } from 'react';
import firebase from '../../firebase-client/auth';
import Close from '../../assets/close.png'


const addNotes = ({ cancel }) => {



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [title, setTitle] = useState('');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [text, setText] = useState('');
    const [existingNotes, setexistingNotes] = useState([]);

    const handleClick = async (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            try {
                await firebase().post(text);
                cancel()
                setexistingNotes(text)
                console.log('se guardo la nota correctamente');
            } catch (e) {
                console.log('érror al guardar nota', e)
            }

        } else {
            // eslint-disable-next-line no-alert
            console.log('Ingrese su nota');
            //  alert('Ingrese su nota');
        }
        setText.value = '';

    }

    return (
        <main>
            <figure className="box-close" onClick={cancel}>
                <img src={Close} className="close" alt="close" />

            </figure>
            <form onSubmit={handleClick}>
                <input type="text" name="" id="inp-title" placeholder='Titulo' onChange={(e) => setTitle(e.target.value)} ></input>
                <p>new date() </p>
                <textarea name="textarea" id="" cols="52" rows="10" placeholder='Empiece a escribir' onChange={(e) => setText(e.target.value)} ></textarea>
                <button type="onSubmit" >Guardar </button>
                
            </form>

        </main>

    );
};

export default addNotes;