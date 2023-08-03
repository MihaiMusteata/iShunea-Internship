import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-multi-carousel/lib/styles.css";
import { Box, Center, Flex, Image, Button, Text, ChakraProvider, Card, Heading, CardBody, Stack, CardFooter, Divider } from "@chakra-ui/react"
import { responsive, carterImage, mobileApp, call_to_actionImage, services, icons, progress, projects, news } from './Helper';

const carouselSettings = {
    showDots: false,
    additionalTransfrom: -20,
    arrows: false,
    responsive: responsive,
    autoPlay: true,
    autoPlaySpeed: 3000,
    infinite: true,
};

const Services = () => {
    const windowsWidth = window.innerWidth;
    return (
        <div className="white-container">
            <div className="services-container">
                {windowsWidth > 1320 ? (
                    <ChakraProvider>
                        <Box>
                            <h1>We help companies to grow digitally</h1>
                        </Box>
                        <Center>
                            <Flex direction="row" alignItems="center">
                                {services.map((service) => (
                                    <Box p="5" position="relative" >
                                        <div className='img-wrapper'>
                                            <Image src={service.image} className="slide" />
                                            <Text className='slide-title'>{service.title}</Text>
                                            <div className='white-circle'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-arrow-right-short arrow-icon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Box>
                                ))};
                            </Flex>
                        </Center>
                    </ChakraProvider>
                ) : (
                    <div>
                        <Box >
                            <h1>We help companies to grow digitally</h1>
                        </Box>
                        <Carousel {...carouselSettings}>
                            {services.map((service) => (
                                <Box p="5" position="relative" display="flex" justifyContent="center" alignItems="center" >
                                    <div className='img-wrapper'>
                                        <Image src={service.image} className="slide" />
                                        <Text className='slide-title'>{service.title}</Text>
                                        <div className='white-circle'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-arrow-right-short arrow-icon" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </Box>
                            ))}
                        </Carousel>
                    </div>
                )}
            </div>
            <Box p="5" position="relative" display="flex" justifyContent="center" alignItems="center" paddingBottom={100}>
                <div style={{ position: 'relative' }}>
                    <Image src={call_to_actionImage} style={{ marginTop: '100px', borderRadius: '20px', height: '720px', width: '1280px', objectFit: 'none' }} />
                    <div className='call-to-action' maxW='sm' >
                        <h1 >Not sure about what you need?</h1>
                        <h4 >Request a consultation so we offer our knowledge base to help you set up the best digital solution for your business</h4>
                        <button className="contact-btn text-dark d-flex align-items-center justify-content-center" style={{ background: 'white', boxShadow: 'none' }}>
                            <span>request now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default Services;