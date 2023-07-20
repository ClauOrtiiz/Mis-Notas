import './loginForm.css'
import { useNavigate } from 'react-router-dom';
import Bnt from '../../Components/button/labelBnt'
// eslint-disable-next-line react/prop-types
const LoginForm = ({ setEmail, setPassword, errorMessage, handleLogin, isActive, email, password }) => {

    const navigate = useNavigate();

    const handleClickRegister = () => {
        navigate('/register')
    }


    return (
        <>
            <h2>Iniciar Sesión </h2>
            <form className="login-form">
                <div className="group">
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
                </div>
                <p id="messageError" data-testid="message-Error" className={`messageError ${isActive && 'activate'}`} >{errorMessage}</p>
                <button data-testid='button-login' onClick={handleLogin} className="btn" > Ingresar</button>
            </form>
            <button onClick={handleClickRegister} className="bottomTextLogin">¿No tienes una cuenta? Regístrate</button>
        </>

    );
};

export default LoginForm;