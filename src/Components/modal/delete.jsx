import Close from '../../assets/close.png';
import 'firebase/firestore';
import './delete.css';


const addNotes = ({ cancel, handleClickDelete }) => {

    return (
        <section className='modalDelete-container-global'>
            <div className='modalDelete-content'>
                <figure className="box-close" onClick={cancel}>
                    <img src={Close} className="close" alt="close" />
                </figure>
                <div className='question-item'>
                    <p className='title-question'>¿Estás seguro que deseas eliminar este post?</p>
                    <button onClick={handleClickDelete} className='btn-continue' type="onSubmit" >Continuar</button>
                </div>
            </div >
        </section >

    );
};

export default addNotes;