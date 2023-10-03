import '../card/cardNotes.css';
import IconEdit from '../../assets/edit.png';
import IconDelete from '../../assets/delete.png';
// Trunca el título y agrega "..." al final
const truncateTitle = (title) => {
    if (title.length > 25) {
        return title.slice(0, 25) + '...'; 
    }
    return title;
};

const cardNotes = ({ notes, clickModalDelete, clickModalEdit }) => {
    // Ordena segun fecha de publicacion
    const sortedNotes = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log('--fecha',sortedNotes );

    return (
        <main className='card-notes'>
            {sortedNotes.map((note, index) => (
                <section key={index} className="card-notes-container">
                    <p className='card-notes-title' >{truncateTitle(note.title)}</p>
                    <p className='card-notes-text' >{note.text}</p>
                    <div className='container-btns'>
                        <button onClick={clickModalEdit(note.id)}  className='btn-edit'> <img src={IconEdit} className='icon-edit-product' alt="edit-product" /> </button>
                        <button onClick={clickModalDelete(note.id)} className='btn-delete'> <img src={IconDelete} className='icon-delete-product' alt="delete-product" /></button>
                    </div>
                </section>
            ))}
        </main >
    );
};

export default cardNotes;
