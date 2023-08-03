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

const Service = () => {
    const windowsWidth = window.innerWidth;
    return (
        <div className="service">
            <div className="service-heading white-container" style={{ paddingBottom: '50px' }}>
                <div className='row'>
                    <div className='col-lg-4'>
                        <h1>Mobile Applications</h1>
                        <p>Native or cross-browser applications for smartphones and tablets with modern designs and outstanding quality</p>
                    </div>
                    <div className='col-lg-3 service-icon'>
                        <Image src={icons[21].icon}/>
                        <h1>Premium deliverables</h1>
                        <p>Our applications always meet the high standards of the market</p>
                    </div>
                    <div className='col-lg-3 service-icon'>
                        <Image src={icons[22].icon}/>
                        <h1>High level security</h1>
                        <p>Performance & security testing stands at the core of our solutions</p>
                    </div>
                </div>
            </div>
            <div className="service-image">
                <Image src={mobileApp} />
                <div className="service-image-text">
                    <h1>6.6 billion</h1>
                    <p>of global smartphone users, marking a 4.9% annual increase</p>
                </div>
            </div>
            <div className='white-container' style={{ borderRadius: '50px 50px 0 0' }}>
                <Row>
                    <ChakraProvider  >
                        <Center alignItems={'flex-end'} justifyContent={'center'}>
                            <div className='col col-lg-4 col-md-6' style={{ margin: '20px ', padding: '0 100px 0 100px' }}>
                                <div className='progress-heading' maxW='sm' >
                                    <h1 >How it works</h1>
                                    <h4 >Our processes are transparent so you will know what we are working on, and why</h4>
                                </div>
                                <Card style={{ width: '410px' }} boxShadow='0 0 20px rgba(0, 0, 0, 0.1)' borderRadius={20} >
                                    <CardBody textAlign='left'>
                                        <Image src={progress[0].icon} />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{progress[0].title}</Heading>
                                            <Text>{progress[0].text}</Text>
                                        </Stack>
                                    </CardBody>
                                    <CardFooter className='half-number'>
                                        01
                                    </CardFooter>
                                </Card>
                                <Card style={{ width: '410px', marginTop: '1rem' }} boxShadow='0 0 20px rgba(0, 0, 0, 0.1)' borderRadius={20} >
                                    <CardBody textAlign='left'>
                                        <Image src={progress[3].icon} />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{progress[3].title}</Heading>
                                            <Text>{progress[3].text}</Text>
                                        </Stack>
                                    </CardBody>
                                    <CardFooter className='half-number'>
                                        04
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className='col col-lg-4 col-md-6' style={{ margin: '20px ' }}>
                                <Card style={{ width: '410px' }} boxShadow='0 0 20px rgba(0, 0, 0, 0.1)' borderRadius={20} >
                                    <CardBody textAlign='left'>
                                        <Image src={progress[1].icon} />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{progress[1].title}</Heading>
                                            <Text>{progress[1].text}</Text>
                                        </Stack>
                                    </CardBody>
                                    <CardFooter className='half-number'>
                                        02
                                    </CardFooter>
                                </Card>
                                <Card style={{ width: '410px', marginTop: '1rem' }} boxShadow='0 0 20px rgba(0, 0, 0, 0.1)' borderRadius={20} >
                                    <CardBody textAlign='left'>
                                        <Image src={progress[4].icon} />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{progress[4].title}</Heading>
                                            <Text>{progress[4].text}</Text>
                                        </Stack>
                                    </CardBody>
                                    <CardFooter className='half-number'>
                                        05
                                    </CardFooter>
                                </Card>
                            </div>
                            <div className='col col-lg-4 col-md-6' style={{ margin: '20px ' }}>
                                <Card style={{ width: '410px' }} boxShadow='0 0 20px rgba(0, 0, 0, 0.1)' borderRadius={20} >
                                    <CardBody textAlign='left' >
                                        <Image src={progress[2].icon} />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{progress[2].title}</Heading>
                                            <Text>{progress[2].text}</Text>
                                        </Stack>
                                    </CardBody>
                                    <CardFooter className='half-number'>
                                        03
                                    </CardFooter>
                                </Card>
                                <Card style={{ width: '410px', marginTop: '1rem' }} boxShadow='0 0 20px rgba(0, 0, 0, 0.1)' borderRadius={20} >
                                    <CardBody textAlign='left'>
                                        <Image src={progress[5].icon} />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{progress[5].title}</Heading>
                                            <Text>{progress[5].text}</Text>
                                        </Stack>
                                    </CardBody>
                                    <CardFooter className='half-number'>
                                        06
                                    </CardFooter>
                                </Card>
                            </div>
                        </Center>
                    </ChakraProvider>
                </Row>
                <Box p="5" position="relative" display="flex" justifyContent="center" alignItems="center">
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
                <div className="services-container">
                    {windowsWidth > 1320 ? (
                        <ChakraProvider>
                            <Box>
                                <h1>Other services</h1>
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
                                <h1>Other services</h1>
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
            </div>
        </div>

    );
}

export default Service;