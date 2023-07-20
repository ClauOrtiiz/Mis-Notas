import Close from '../../assets/close.png'


const addNotes = ({ cancel }) => {


    return (
        <main>
            <figure className="box-close" onClick={cancel}>
                <img src={Close} className="close" alt="close" />

            </figure>
            <input type="text" name="" id="inp-title" placeholder='Titulo' />
            <p>new date() </p>
            <textarea name="textarea" id="" cols="52" rows="10" placeholder='Empiece a escribir' ></textarea>
            <button>Guardar</button>
        </main>

    );
};

export default addNotes;