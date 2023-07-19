import './crearForm.css'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const createForm = ({ email, password, setEmail, setPassword, errorMessage, handleLogin, isActive, text }) => {
    const navigate = useNavigate();
    const handleClickLogin = () => {
        navigate('/login')
    }
    return (
        <>
            <h2>Crear cuenta </h2>
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
                <button data-testid='button-login' onClick={handleLogin} className="btn" value={text}>Guardar</button>
            </form>
            <button onClick={handleClickLogin} className="bottomTextLogin">¿Ya tienes una cuenta? Iniciar Sesión</button>

        </>

    );
};

export default createForm;