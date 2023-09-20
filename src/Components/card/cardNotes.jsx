import '../card/cardNotes.css';
import IconEdit from '../../assets/edit.png'
import IconDelete from '../../assets/delete.png'

const cardNotes = ({ notes }) => {

    // ordena segun fecha de publicacion
    const sortedNotes = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <main className='card-notes'>
            <div>
                {sortedNotes.map((note, index) => (
                    <section key={index} className="card-notes-container">
                        <p className='card-notes-title' >{note.title}</p>
                        <p className='card-notes-text' >{note.text}</p>
                        <div className='container-btns'>
                            <button  className='btn-edit'> <img src={IconEdit} className='icon-add-product' alt="add-product" /> </button>
                            <button className='btn-delete'> <img src={IconDelete} className='icon-add-product' alt="add-product" /></button>
                        </div>
                    </section>
                ))}
            </div>
        </main >
    )
}

export default cardNotes;
