import './loginForm.css'
// import { useNavigate } from 'react-router-dom';
import Bnt from '../../Components/button/labelBnt'
import Imagen from '../../assets/apuntes.jpg'
import Google from '../../assets/google.png';
// eslint-disable-next-line react/prop-types
const LoginForm = ({ handleClickGoogle, setEmail, setPassword, errorMessage, handleLogin, isActive, email, password }) => {

    return (
        <div className="loginform-conteiner">
            <img src={Imagen} className='img-desktop' alt="add-product" />
            <form className='loginform-form' >
            <p className='init-text'> Inicia sesión</p>
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
                <button className="btn-google" onClick={handleClickGoogle}> <img src={Google} /> Continuar con Google  </button>
            </form>
        </div>

    );
};

export default LoginForm;