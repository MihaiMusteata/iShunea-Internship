import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-multi-carousel/lib/styles.css";
import { Box, Center, Flex, Image, Button, Text, ChakraProvider, Card, Heading, CardBody, Stack, CardFooter, Divider } from "@chakra-ui/react"
import { responsive, carterImage, agroconexImage, call_to_actionImage, services, icons, progress, projects, news } from './Helper';

const carouselSettings = {
    showDots: false,
    additionalTransfrom: -20,
    arrows: false,
    responsive: responsive,
    autoPlay: true,
    autoPlaySpeed: 3000,
    infinite: true,
};

const Home = () => {
    const windowsWidth = window.innerWidth;
    return (
        <div>
            <Container className="d-flex flex-column">
                <div className="motto-container">
                    <h1 className="motto">Moving your ideas to digital</h1>
                    <h4 className="intro">The ultimate solutions for ERP systems, CRMs, mobile apps and web platforms</h4>
                </div>
                <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center" style={{ margin: '15px auto 0 auto' }}>
                    <span>contact us</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </button>

                <img src={carterImage} alt="Carter" className="carter-img" />
            </Container>

            <div className="white-container" style={{ borderRadius: '50px' }}>
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
                <div className="advantages-container" >
                    <div className="row" >
                        <h1>Simple at every stage</h1>
                        <div className="advantages row">
                            {icons.slice(0, 6).map((item) => (
                                <div className="advantage-icon col-lg-4 col-md-6 col-sm-12">
                                    <Image src={item.icon} />
                                    <h3 style={{ width: '200px' }}>{item.description}</h3>
                                </div>
                            ))};
                        </div>
                    </div>
                    <Image src={agroconexImage} className="agroconex-img" />
                </div>
                <div style={{ height: '50px', marginBottom: '50px' }}></div>
            </div>
            <div className="projects-container">
                {windowsWidth > 1320 ? (
                    <ChakraProvider>
                        <Center>
                            <Flex direction="column" alignItems="center">
                                <Box>
                                    <h1>Projects highlights</h1>
                                </Box>
                                <div className="row g-2">
                                    {projects.map((project) => (
                                        <div className="col-sm-4 col-md-6 col-lg mb-2">
                                            <Box p="5" position="relative" display="flex" justifyContent="center" alignItems="center">
                                                <div className="img-wrapper" style={{width:'302px', height:'360px'}}>
                                                    <Image src={project.image} className="slide" style={{width:'302px', height:'360px'}}/>
                                                    <Text className="slide-title"> {project.text} </Text>
                                                    <div className="white-circle" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short arrow-icon" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </Box>
                                        </div>
                                    ))}
                                </div>
                            </Flex>
                        </Center>
                    </ChakraProvider>
                ) : (
                    <div>
                        <Box>
                            <h1>Projects highlights</h1>
                        </Box>
                        <Carousel {...carouselSettings}>
                            {projects.map((project) => (
                                <Box p="5" position="relative" display="flex" justifyContent="center" alignItems="center">
                                    <div className="img-wrapper">
                                        <Image src={project.image} className="slide" />
                                        <Text className="slide-title"> {project.text} </Text>
                                        <div className="white-circle" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short arrow-icon" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </Box>
                            ))}
                        </Carousel>
                    </div>
                )}
            </div>
            <div className='white-container' style={{ borderRadius: '50px 50px 0 0' }}>
                <Row>
                    <ChakraProvider  >
                        <Center alignItems={'flex-end'} justifyContent={'center'}>
                            <div className='col col-lg-4 col-md-6' style={{ margin: '20px ', padding:'0 100px 0 100px' }}>
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
                <div className='blog'>
                    <div className='blog-heading' maxW='sm' >
                        <h1 >Latest articles</h1>
                        {windowsWidth > 1320 ? (
                            <ChakraProvider>
                                <Center>
                                    <Flex direction="row" alignItems="center">
                                        {news.map((item, index) => (
                                            <Box p="5" position="relative" textAlign="left">
                                                <div className="img-wrapper">
                                                    <Image src={item.image} className="slide" />
                                                    <Text className="tag">{item.tag}</Text>
                                                </div>
                                                <div style={{ width: '100%' }}>
                                                    <h2 className='blog-title' style={{width:'302px'}}>{item.title}</h2>
                                                    <Text width={'302px'}>{item.date}</Text>
                                                </div>
                                            </Box>
                                        ))}
                                    </Flex>
                                </Center>
                            </ChakraProvider>
                        ) : (
                            <div>
                                <Carousel {...carouselSettings} >
                                    {news.map((item, index) => (
                                        <Box p="5" position="relative" textAlign={'left'} marginLeft={50} justifyContent="center" alignItems="center">
                                            <div className="img-wrapper">
                                                <Image src={item.image} className="slide" />
                                                <Text className="tag">{item.tag}</Text>
                                            </div>
                                            <div style={{ width: '100%' }}>
                                                <Heading size="md" width={'302px'} >{item.title}</Heading>
                                                <Text width={'302px'}>{item.date}</Text>
                                            </div>
                                        </Box>
                                    ))}
                                </Carousel>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div >

    );
}

export default Home;