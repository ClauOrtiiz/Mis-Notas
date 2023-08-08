import './crearForm.css'

import Bnt from '../../Components/button/labelBnt'



const createForm = ({ email, password, setEmail, setPassword, errorMessage, handleLogin, isActive, text }) => {


    return (
            <div className='create-container'>
                <form className="create-form">
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