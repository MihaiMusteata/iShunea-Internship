import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import imageLogo from '../images/logo.png';
import attachIcon from '../images/attach-icon.png';
import Image from 'react-bootstrap/Image';
import '../styles/modal_box.css';

function ModalBox_Alert() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal size='lg' show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton style={{ border: 'none' }}>
                    <img src={imageLogo} alt="Logo" className="mr-auto navbar-logo" />
                </Modal.Header>
                <Modal.Body style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <div className='modal-box-content'>
                        <h1>Request a call</h1>
                        <input type="text" placeholder="Full name" className="modal-input-text" />
                        <input type="text" placeholder="E-mail adress" className="modal-input-text" />
                        <select className="modal-select-list" >
                            <option >Error type</option>
                        </select>
                        <textarea placeholder="Short message" className="modal-input-text" style={{ height: '155px' }} ></textarea>
                        <div className='attach-file'>
                            <Image src={attachIcon} className='attach-file-icon' />
                            <input type="file" placeholder="Short message" className="modal-input-text" id='file-input' style={{ display: 'none' }} />
                            <label for="file-input" className='attach-file-label'></label>
                            <div className='attach-file-text'>
                                <h1>Attach resume</h1>
                                <p>PDF, DOCX up to 20 MB</p>
                            </div>
                        </div>
                        <label className='check-terms-label'>
                            <input type="checkbox" id="checkbox" />
                            {/* <label for="checkbox" className='check-terms'></label> */}

                            <span style={{ verticalAlign: 'middle' }}>
                                I accept the&nbsp;
                                <a href="/terms" style={{ color: 'black' }}>
                                    <strong><u>Terms &amp; Conditions</u></strong>
                                </a>
                                &nbsp;of user data processing.
                            </span>
                        </label>


                        <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center " style={{ width: '100%', margin: '5px auto 0 auto', boxShadow: 'none', padding: '0 20px' }}>
                            <span>send message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </button>
                    </div>
                </Modal.Body>

            </Modal >
        </>
    );
}

export default ModalBox_Alert;