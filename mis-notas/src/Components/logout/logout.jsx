import { useNavigate } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import { app } from '../../firebase-client/firebase';
// import out from '../../assets/out.png';
// import './logout.css'

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
        <div className='btn-logout-container'>
            <figure className='box-content'>

                <div className='box-logout' onClick={handleClicklogout}>
                    {/* <img src={out} className='out' alt="logo" /> */}
                    <p className='text-out'>Salir</p>
                </div>

            </figure>
        </div>
    );
};

export default Logout;