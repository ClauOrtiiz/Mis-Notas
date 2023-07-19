import './loginForm.css'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LoginForm = ({ email, password, setEmail, setPassword, errorMessage, handleLogin, isActive, text }) => {
    const navigate = useNavigate();
    const handleClickRegister = () => {
        navigate('/register')
    }
    return (
        <>
            <h2>Iniciar sesión </h2>
            <form className="login-form">

                <div className="group">
                    {/* <label htmlFor=""> </label> */}
                    <input
                        data-testid="email"
                        className="inp"
                        id="email"
                        placeholder="example@example.com"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        data-testid="password"
                        className="inp"
                        id="password"
                        placeholder="*********"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <p id="messageError" data-testid="message-Error" className={`messageError ${isActive && 'activate'}`} >{errorMessage}</p>
                <button data-testid='button-login' onClick={handleLogin} className="btn" value={text} >Ingresar</button>
            </form>
            <button onClick={handleClickRegister} className="bottomTextLogin">¿No tienes una cuenta? Regístrate</button>

        </>

    );
};

export default LoginForm;