import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Components/logo/logo';
import CreateForm from '../../Components/createForm/createForm';
import firebase from '../../firebase-client/auth';
import './register.css'

const Register = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isActive, setIsActive] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsActive(true);

        if (email.trim() === '' || password.trim() === '') {
            setErrorMessage('* Estos campos son obligatorios');
            return;
        }

        try {
            await firebase().createUser(email, password);
            try {
                navigate('/misNotas')

            } catch (err) {
                err
            }

        } catch (err) {
            setErrorMessage('Oops, it is incorrect. Please try again');
        }
    };

    //navegar
    const handleClickLogin = () => {
        navigate('/')
    }

    return (
        <section className='register-container'>
            <Logo />
            <CreateForm
                isActive={isActive}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                errorMessage={errorMessage}
                handleLogin={handleRegister}
            />

            <footer className='footer-btn'>
                <p className='footer-bntInit-text'>¿Ya tienes una cuenta?</p>
                <button className='btn-init' onClick={handleClickLogin}> Iniciar Sesión </button>
            </footer>
        </section>
    );

};

export default Register;





