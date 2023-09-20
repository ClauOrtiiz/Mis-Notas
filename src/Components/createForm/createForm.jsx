import './crearForm.css'
import Imagen from '../../assets/apuntes.jpg'
import Bnt from '../../Components/button/labelBnt'



const createForm = ({ email, password, setEmail, setPassword, errorMessage, handleLogin, isActive, text }) => {


    return (
        <div className='create-container'>
            <img src={Imagen} className='img-desktop' alt="add-product" />
            <form className="create-form">
                <p className='register-text'>Crear cuenta </p>
                <Bnt
                    textLabel='Correo'
                    onChange={setEmail}
                    textPlaceholder='ejemplo@ejemplo.com'
                    typeInp='text'
                    value={email}
                    textId='email'
                />

                <Bnt
                    textLabel='Contraseña'
                    onChange={setPassword}
                    textPlaceholder='**********'
                    typeInp='password'
                    value={password}
                    textId='password'
                />

                <p id="messageError" data-testid="message-Error" className={`messageError ${isActive && 'activate'}`} >{errorMessage}</p>
                <button className="btn-save" data-testid='button-login' onClick={handleLogin} value={text}>Guardar</button>
            </form>
        </div>
    );
};

export default createForm;