
const ModalEditProduct = (cancel) => {




    return (
        <div className="modal-add">
            <div className="modal-content-add">
                <p className="title-add" > Editar Mi Nota</p>
                <figure className="box-close" onClick={cancel}>
                    <img src={close} className="close" alt="close" />

                </figure>

                <form className='content-item' onSubmit={edit}>
                    <div className='item' >
                        <label>Titulo:</label>
                        <input className="inp-modal" type="text" defaultValue={existingNotes.title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter product name" />
                    </div>

                    <div className='item' >
                        <label>Nota:</label>
                        <input className="inp-modal" type="text" defaultValue={existingNotes.text} onChange={(e) => seText(e.target.value)} placeholder="Enter product name" />
                    </div>

                    <input type="submit" className="btn-add" value="Save" />

                </form>



            </div>
        </div>
    );
};

export default ModalEditProduct;