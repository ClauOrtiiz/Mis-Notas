/*import { useState } from 'react';
import Logout from '../../Components/logout/logout'
import Logo from '../../Components/logo/logo'
import Plus from '../../assets/plus.png'
import ModalAddNotes from  '../../Components/modal/addNotes'
// import CardNotes from '../../Components/card/cardNotes'
import firebase from '../../firebase-client/auth'; */


// const notes = () => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [showModalAddNotes, setShowModalAddNotes] = useState(false);
//     const handleClickModalAddNotes = () => {
//         setShowModalAddNotes(true);
//     }

//         const cancel = () => {
//             setShowModalAddNotes(false);
//         }


//         const [existingNotes, setexistingNotes] = useState([]);
//         const showNotes =() => {
//             firebase().colPost()
//             setexistingNotes
//         }

//     return (
//         <section className="g-container">
//             <Logout></Logout>
//             <Logo></Logo>


//             <main>
//                 <button onClick={handleClickModalAddNotes} > <img src={Plus} className='icon-add-product' alt="add-product" /> </button>
//                 {showModalAddNotes && <ModalAddNotes cancel={cancel} />}
//                 {/* <CardNotes></CardNotes> */}
//             </main>
//         </ section>
//     );
// };

// export default notes;