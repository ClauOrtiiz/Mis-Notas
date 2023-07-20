import './crearForm.css'
import { useNavigate } from 'react-router-dom';
import Bnt from '../../Components/button/labelBnt'



const createForm = ({ email, password, setEmail, setPassword, errorMessage, handleLogin, isActive, text }) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const handleClickLogin = () => {
        navigate('/login')
    }
    return (
        <>
            <h2>Crear cuenta </h2>
            <form className="login-form">

            <div className="group">
                    <Bnt
                        textLabel='Correo'
                        onChange={setEmail}
                        textPlaceholder='ejemplo@ejemplo.com'
                        typeInp='text'
                        value={email}
                        textId ='email'
                    />

                    <Bnt
                        textLabel='Contraseña'
                        onChange={setPassword}
                        textPlaceholder='**********'
                        typeInp='password'
                        value={password}
                        textId = 'password'
                    />
                </div>
                <p id="messageError" data-testid="message-Error" className={`messageError ${isActive && 'activate'}`} >{errorMessage}</p>
                <button data-testid='button-login' onClick={handleLogin} className="btn" value={text}>Guardar</button>
            </form>
            <button onClick={handleClickLogin} className="bottomTextLogin">¿Ya tienes una cuenta? Iniciar Sesión</button>

        </>

    );
};

export default createForm;