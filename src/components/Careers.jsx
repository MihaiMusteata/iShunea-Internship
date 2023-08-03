import React, { useEffect } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { agroconexImage, icons, team, gallery, life, Why_iShunea, magnifyingGlass } from './Helper';
import { ChakraProvider, Box, Center, Flex, Text, Heading, Card, CardBody, CardFooter, Button } from "@chakra-ui/react";

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
const Careers = () => {
    
    return (
        <div className='careers'>
            <div className='white-container' >
                <div className='row'>
                    <ChakraProvider>
                        <Center alignItems={'flex-end'} justifyContent={'center'} flexWrap={'wrap'}>
                            <div className=' col-md-5 col-lg-12 careers-text' style={{ padding: '50px 50px 0 50px' }}>
                                <h1>The heart of iShunea</h1>
                                <p>The future of our world is digital. There are plenty of great opportunities and we want you to be a part of something new</p>
                                <div className="d-flex flex-column flex-sm-row mt-5" style={{ paddingBottom: '100px' }}>
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
                            <div className='col col-md-3'>
                                <Image src={gallery[10]} />
                                <Image src={gallery[6]} />
                            </div>
                            <div className='col col-md-3'>
                                <Image src={gallery[11]} />
                                <Image src={gallery[9]} />
                            </div>
                            <div className='col col-md-5'>
                                <Image src={gallery[8]} />
                                <Image src={gallery[7]} />
                            </div>
                        </Center>
                    </ChakraProvider>
                </div>

                <div className="numbers">
                    <Image src={Why_iShunea} width={'100%'} />

                    <div style={{ display: 'flex', gap: '200px', position: 'absolute' }} >
                        <div className="row">
                            <div className="col-lg-5" >
                                <h1 style={{ fontFamily: 'OnestMedium', fontSize: '56px', fontWeight: 500, lineHeight: '67px', letterSpacing: '0em', textAlign: 'left', color: 'white', marginLeft: '50px' }}>Why join iShunea</h1>
                            </div>
                            <div className="col-lg-5">
                                <div className="advantages row">
                                    {icons.slice(12, 18).map((item) => (
                                        <div className="advantage-icon col-lg-4 col-md-6 col-sm-12">
                                            <Image src={item.icon} />
                                            <h3 style={{ color: 'white' }}>{item.description}</h3>
                                        </div>
                                    ))};
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='blog'>
                    <div className='blog-heading' maxW='sm' >
                        <ChakraProvider>
                            <Center>
                                <Flex direction="column" alignItems="center">
                                    <h1 >Life at iShunea</h1>
                                    <p>Connection and kindness are core to our culture</p>
                                    <div className="row g-2 life-content" >
                                        {life.map((item, index) => (
                                            <div className='life-item'>
                                                <Box p="5" position="relative" textAlign="center" mt-10>
                                                    <div >
                                                        <Image src={item.image} />
                                                    </div>
                                                    <div style={{ width: '100%', color: 'black' }}>
                                                        <h1>{item.title}</h1>
                                                        <Text opacity={0.5} >{item.description}</Text>
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

                <div className="careers">
                    <h1 style={{ width: 'calc(100% - 100px)', margin: 'auto', paddingBottom: '50px' }}>Available positions</h1>
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
                                            <TableCell component="th" style={{ fontFamily: 'OnestMedium', fontSize: '20px', padding: '50px 50px' }}><a href="/job">{row.job}</a></TableCell>
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
                    </div>
                        <div className="job-footer">
                            <div className='job-footer-bg' style={{width:'100%'}}>
                                <Image src={magnifyingGlass} className="star3D" />
                                <h1>Didn’t find an open job for you?</h1>
                                <p>Message us and we will get back as soon as possible</p>
                                <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center" style={{ margin: '15px auto 0 auto', boxShadow: 'none' }}>
                                    <span>contact us now</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </div >
    );
}

export default Careers;