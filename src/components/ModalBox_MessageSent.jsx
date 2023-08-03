import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import imageLogo from '../images/logo.png';
import attachIcon from '../images/attach-icon.png';
import Image from 'react-bootstrap/Image';
import {sms} from './Helper';

import '../styles/modal_box.css';

function ModalBox_MessageSent() {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal size='lg' width={'1000px'} show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton style={{ border: 'none' }}>
                    <img src={imageLogo} alt="Logo" className="mr-auto navbar-logo" />
                </Modal.Header>
                <Modal.Body style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <div className='modal-box-content'style={{width:'100%', paddingBottom:'100px'}}>
                        <Image src={sms}></Image>
                        <h1>Message successfuly sent</h1>
                        <p>We will get back as soon as possible</p>

                        <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center " style={{ width: 'auto', margin: '5px auto 0 auto', boxShadow: 'none', padding: '0 20px' }}>
                            <span>continue</span>
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

export default ModalBox_MessageSent;