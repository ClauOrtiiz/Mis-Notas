/* eslint-disable react-hooks/rules-of-hooks */
import './init.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LogoMisNotas from '../../Components/logo/logo';
import firebase from '../../firebase-client/auth';
import LoginForm from '../../Components/loginForm/loginForm';


const init = () => {
    const navigate = useNavigate();

    //ingresa con cuenta ya existente
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsActive(true);

        if (email.trim() === '' || password.trim() === '') {
            setErrorMessage('* Estos campos son obligatorios');
            return;
        }
        try {
            await firebase().signIn(email, password);
            try {
                navigate('/misNotas')

            } catch (err) {
                err
            }

        } catch (err) {
            setErrorMessage('Ups, algo salio mal. Vuelva a intentarlo.');
        }
    };

    //navegar a register
    const handleClickRegister = () => {
        navigate('/register')
    }
    //ingresa con google
    const handleClickGoogle = () => {
        firebase().loginWithGoogle()
            .then(() => {
                navigate('/misNotas');
            }).catch(() => { });
    };

    return (
        <section className='init-container'>
            <LogoMisNotas></LogoMisNotas>
            <LoginForm isActive={isActive}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                errorMessage={errorMessage}
                handleLogin={handleLogin}
                handleClickGoogle={handleClickGoogle} ></LoginForm>

            <footer className='footer-btn' >
                <p className='footer-bt-text'>¿No tienes una cuenta?</p>
                <button className="btn-register" onClick={handleClickRegister} > Registrate </button>
            </footer>
        </section>
    );
};

export default init;