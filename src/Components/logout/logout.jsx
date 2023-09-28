import { useNavigate } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import { app } from '../../firebase-client/firebase';
import Exit from '../../assets/exit.png';
import './logout.css'

const Logout = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();

    const handleClicklogout = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch(() => {
        });
    };

    return (

        <div className='logout-container' onClick={handleClicklogout}>
            <img src={Exit} className='logout-img' alt="logo" />
            <p className='logout-text'>Salir</p>
        </div>
    );
};

export default Logout;