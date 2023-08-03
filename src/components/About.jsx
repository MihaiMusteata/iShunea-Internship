import React, { useEffect } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { agroconexImage, icons, team, gallery, aboutImage } from './Helper';
import { ChakraProvider, Box, Center, Flex, Text, Stack, Heading, Card, CardBody, CardFooter, Button } from "@chakra-ui/react";

function createData(job, location, post_date) {
    return { job, location, post_date };
}
const rows = [
    createData('Middle UX/UI Designer', 'Moldova · Full-time', '2 days ago'),
    createData('Senior Python Developer', 'Israel · Freelance', '6 days ago'),
    createData('Business Analyst', 'Romania · Contract', '2 weeks ago'),
    createData('Business Analyst', 'Moldova · Full-time', '2 weeks ago'),
    createData('Marketing Manager', 'Israel · Full-time', '3 weeks ago'),
];
const About = () => {
    useEffect(() => {
        var team = document.querySelectorAll('.team');
        team.forEach(function (member) {
            var socialIcons = member.querySelectorAll('.social-icon');
            member.addEventListener('mouseover', function () {
                socialIcons.forEach(function (socialIcon) {
                    socialIcon.style.color = 'black';
                    socialIcon.style.backgroundColor = 'white';
                    socialIcon.style.backgroundImage = 'black';
                });
            });
            member.addEventListener('mouseout', function () {
                socialIcons.forEach(function (socialIcon) {
                    socialIcon.style.color = 'white';
                    socialIcon.style.backgroundColor = '';
                    socialIcon.style.backgroundImage = 'radial-gradient(49.75% 100% at 50% 100%, rgba(251, 223, 6, 0.1) 0%, rgba(251, 223, 6, 0) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))';
                });
            });
        });

    }, []);
    return (
        <div className='about'>
            <div className='white-container' >
                <div className='row'>
                    <ChakraProvider >
                        <Center alignItems={'flex-end'} justifyContent={'center'} >
                            <div className='col col-md-3'>
                                <div className='progress-heading' maxW='sm' >
                                    <h1 >What is iShunea</h1>
                                    <h4 >We are moving your ideas to digital by building the ultimate solutions for ERP systems, CRMs, mobile apps and web platforms.</h4>
                                </div>
                                <Image src={gallery[4]} />
                                <Image src={gallery[0]} />
                            </div >
                            <div className='col col-md-3'>
                                <Image src={gallery[5]} />
                                <Image src={gallery[3]} />
                            </div>
                            <div className='col col-md-5 '>
                                <Image src={gallery[2]} />
                                <Image src={gallery[1]} />
                            </div>
                        </Center>
                    </ChakraProvider>
                </div>
                <div className="advantages-container">
                    <div className="row">
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
                <div className='blog'>
                    <div className='blog-heading' maxW='sm' >
                        <ChakraProvider>
                            <Center>
                                <Flex direction="column" alignItems="center">
                                    <h1 >Meet the team</h1>
                                    <div className="row g-2">
                                        {team.map((item, index) => (
                                            <div className="col col-md-3">
                                                <Box p="5" position="relative" textAlign="center" mt-10>
                                                    <div style={{ width: '302px', position: 'absolute', color: 'white', marginTop: '30px' }}>
                                                        <Heading size="md">{item.name}</Heading>
                                                        <Text opacity={0.5} >{item.position}</Text>
                                                    </div>
                                                    <div className="team" style={{ width: '302px' }}>
                                                        <div className="overlay"></div>
                                                        <Image src={item.image} className="team-member" />
                                                        <div style={{ display: 'flex', gap: '10px', position: 'absolute' }} >
                                                            <div className="social-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                                </svg>
                                                            </div>
                                                            <div className="social-icon" >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                                </svg>
                                                            </div>
                                                            <div className="social-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </div>
                                        ))}
                                    </div>
                                </Flex>
                            </Center>
                        </ChakraProvider>
                    </div>
                </div>
                <div className="numbers">
                    <Image src={aboutImage} width={'100%'} />
                    <div style={{ display: 'flex', gap: '200px', position: 'absolute' }} >
                        <div className='numbers-text-box'>
                            <Heading className="numbers-heading">2019</Heading>
                            <Text className="numbers-text">established</Text>
                        </div>
                        <div style={{ color: 'white' }}>
                            <Heading className="numbers-heading">15+</Heading>
                            <Text className="numbers-text">outstanding professionals</Text>
                        </div>
                        <div style={{ color: 'white' }}>
                            <Heading className="numbers-heading">7.5y</Heading>
                            <Text className="numbers-text">avgerage team experience</Text>
                        </div>
                        <div style={{ color: 'white' }}>
                            <Heading className="numbers-heading">20+</Heading>
                            <Text className="numbers-text">happy partners</Text>
                        </div>

                    </div>
                </div>
                <div className="careers">
                    <h1></h1>
                    <div style={{ width: 'calc(100% - 100px)', margin: 'auto' }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.job} sx={{
                                            '&:last-child td, &:last-child th': { border: 0 },
                                            '& td, th, div, td:last-child div': {
                                                transition: '0.3s',
                                            },
                                            '& td:nth-child(2), & th:nth-child(2), & td:nth-child(3), & th:nth-child(3)': {
                                                opacity: 0.5,
                                            },
                                            '&:hover': {
                                                '& td:nth-child(2), & th:nth-child(2), & td:nth-child(3), & th:nth-child(3)': {
                                                    opacity: 1,
                                                },
                                                '& td:last-child div': {
                                                    transform: 'rotate(45deg)',
                                                    background: 'linear-gradient(90deg, #FEB700 0%, #FBDF06 100%);',
                                                }
                                            },
                                        }}>
                                            <TableCell component="th" style={{ fontFamily: 'OnestMedium', fontSize: '20px', padding: '50px 50px' }}>{row.job}</TableCell>
                                            <TableCell align="left" style={{ fontFamily: 'Onest', fontSize: '16px' }}>{row.location}</TableCell>
                                            <TableCell align="left" className='tabel-country' style={{ fontFamily: 'Onest', fontSize: '16px' }}>{row.post_date}</TableCell>
                                            <TableCell align="left" style={{ verticalAlign: 'middle' }}>
                                                <div style={{ display: 'inline-block', border: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'center', borderRadius: '100%' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short arrow-icon" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                                    </svg>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className="d-flex flex-column flex-sm-row mt-5" style={{paddingBottom:'100px'}}>
                            <button className="contact-btn text-dark d-flex align-items-center justify-content-center me-5 mt-3" style={{ background: 'white', boxShadow: 'none', border: '1px solid black' }}>
                                <span>available internships</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                            <button className="contact-btn text-dark d-flex align-items-center justify-content-center me-5 mt-3" style={{ background: 'linear-gradient(90deg, #FEB700 0%, #FBDF06 100%)', boxShadow: 'none' }}>
                                <span>open positions</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <h1></h1>
                </div>
            </div>
        </div >
    );
}

export default About;