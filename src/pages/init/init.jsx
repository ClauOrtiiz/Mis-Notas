import './init.css';
import { useNavigate } from 'react-router-dom';
import Google from '../../assets/google.png';
import LogoMisNotas from '../../Components/logo/logo.jsx';
import firebase from '../../firebase-client/auth.jsx';

const init = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const handleClickInit = () => {
        navigate('/login')
    }
    const handleClickRegister = () => {
        navigate('/register')
    }
    const handleClickGoogle = () => {
        firebase().loginWithGoogle()
            .then(() => {
                navigate('/misNotas');
            }).catch(() => {});
    };
    return (
        <section className='init-container'>
            <LogoMisNotas></LogoMisNotas>
            <p className='welcome'>¡Bienvenido!</p>
            <div className='btns-conteiner'>
                <button className="btn-init" onClick={handleClickInit}> Inicia sesión  </button>
                <button className="btn-register" onClick={handleClickRegister} > Registrate </button>
                <img src='https://firebasestorage.googleapis.com/v0/b/social-network-dev-005.appspot.com/o/assets%2Fdivision.png?alt=media&token=f593313b-0b59-4d75-8ec1-5a2f43015e48' alt="logo" className='linea' />
                <button className="btn-google" onClick={handleClickGoogle}> <img src={Google} />   Registrate con Google  </button>
            </div>
        </section>
    );
};

export default init;