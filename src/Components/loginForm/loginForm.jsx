import './loginForm.css'
// import { useNavigate } from 'react-router-dom';
import Bnt from '../../Components/button/labelBnt'
import Google from '../../assets/google.png';
// eslint-disable-next-line react/prop-types
const LoginForm = ({ handleClickGoogle, setEmail, setPassword, errorMessage, handleLogin, isActive, email, password }) => {

    return (
        <div className="loginform-conteiner">
            <form className='loginform-form' >

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
                <button className="btn-ingresar" onClick={handleLogin} data-testid='button-login' > Ingresar</button>
            </form>
            <button className="btn-google" onClick={handleClickGoogle}> <img src={Google} /> Continuar con Google  </button>
        </div>

    );
};

export default LoginForm;