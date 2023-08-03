import React, { useState } from 'react';
import ModalBox_MessageSent from './ModalBox_MessageSent';
import ModalBox_NewsletterConfirmation from './ModalBox_NewsletterConfirmation';
import ModalBox_Alert from './ModalBox_Alert';
import ModalBox_Call from './ModalBox_Call';
import ModalBox_Job from './ModalBox_Job';


const ModalTesting = () => {
    const [modalStates, setModalStates] = useState([false, false, false, false, false]);

    const handleClick = (index) => {

        setModalStates(prevStates => {
            const newState = [...prevStates];
            newState[index] = !newState[index];
            return newState;
        }); 
    };

    return (
        <div>
            <div>
                <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center " style={{ margin: '5px auto 0 auto', boxShadow: 'none', padding: '0 20px' }} onClick={() => handleClick(0)}>
                    <span>send message</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </button>
                {modalStates[0] && <ModalBox_MessageSent />}
            </div>
            <div>
                <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center " style={{ margin: '5px auto 0 auto', boxShadow: 'none', padding: '0 20px' }} onClick={() => handleClick(1)}>
                    <span>alert</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </button>
                {modalStates[1] && <ModalBox_Alert />}
            </div>
            <div>
                <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center " style={{ margin: '5px auto 0 auto', boxShadow: 'none', padding: '0 20px' }} onClick={() => handleClick(2)}>
                    <span>call</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </button>
                {modalStates[2] && <ModalBox_Call />}
            </div>
            <div>
                <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center " style={{ margin: '5px auto 0 auto', boxShadow: 'none', padding: '0 20px' }} onClick={() => handleClick(3)}>
                    <span>send message job</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </button>
                {modalStates[3] && <ModalBox_Job />}
            </div>
            <div>
                <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center " style={{ margin: '5px auto 0 auto', boxShadow: 'none', padding: '0 20px' }} onClick={() => handleClick(4)}>
                    <span>subscribe</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </button>
                {modalStates[4] && <ModalBox_NewsletterConfirmation />}
            </div>
        </div>

    );
}

export default ModalTesting;