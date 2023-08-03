import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import ModalBox_MessageSent from "./ModalBox_MessageSent";
import '../styles/contact.css';
import { Box, Center, Flex, Image, Text, Heading } from "@chakra-ui/react"
import { responsive, gallery, bell, sms, visitingCards, icons, progress, projects, news } from './Helper';

const Contact = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        setModalOpen(!isModalOpen);
    };
    return (
        <div className="contact">
            <div className="white-container" >
                <div className="row" style={{ padding: '50px 0' }}>
                    {
                        visitingCards.map((visitingCard) => (
                            <div className="visiting-card col-lg-5" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image src={visitingCard.image} />
                                <div className="visiting-card-content">
                                    <h1>{visitingCard.country}</h1>
                                    <p>{visitingCard.street}</p>
                                    <p>{visitingCard.schedule}</p>
                                    <span>{visitingCard.phone}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="contact-footer">
                    <div className='contact-footer-bg'>
                        <Image src={sms} className="bell" />
                        <h1 className="col-lg-4 col-md-7 col-sm-8">Request a call</h1>
                        <p>Ready for lift-off? Ping, tweet, message or poke and we will get back as soon as possible</p>
                        <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center " style={{ margin: '5px auto 0 auto', boxShadow: 'none', padding: '0 20px' }} onClick={handleClick}>
                            <span>send message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </button>
                        {isModalOpen && <ModalBox_MessageSent />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;