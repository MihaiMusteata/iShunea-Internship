import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import "react-multi-carousel/lib/styles.css";
import { Box, Center, Flex, Image, Button, Text, ChakraProvider, Card, Heading, CardBody, Stack, CardFooter, Divider } from "@chakra-ui/react"
import { marker, star3D } from './Helper';

const Job = () => {
    return (
        <div className='white-container' >
            <div className="job">
                <Row >
                    <h1 >Middle UX/UI Designer</h1>
                    <h2>What you will achieve</h2>
                    <div className='job-container'>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Design product concepts that balance vision, craft, speed, and business potential.</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Craft every detail of new product features, from idea to UX to pixel-perfect execution.</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Run projects end to end with engineers to drive your vision to the ship line.</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Use data and acquired intuition to prioritize, plan, and scope our product roadmap.</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Tell great stories throughout the user lifecycle, and across our site, products and other channels.</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Create new patterns that are intuitive and practical. Evolve our design system as we scale.</p>
                        </div>
                    </div>
                    <h2>Skills you will bring</h2>
                    <div className='job-container'>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>You have well-rounded skills and experience to run projects independently end to end. </p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>You can create clear, intuitive, and visually appealing human interfaces.</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>You can untangle vague conceptual problems, and have a sharp intuition for the most accessible mental models and flows, so users can immediately start gaining value out of the product.</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>You care about the business needs, implications, and practicality of your designs. You don't get stuck on pretty UI or deep abstractions, and can balance between craft, speed, and the bottom line.</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>You have strong beliefs, loosely held. You're a good listener who collaborates well with different stakeholders. You observe and internalize all inputs and feedback to help you reach an optimal decision.</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>You like to tell stories using both words and visuals, and strategize the best way to make your point.</p>
                        </div>
                    </div>

                    <h2>Nice to have</h2>
                    <div className='job-container'>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>You've designed and built great tools with small teams in the past.</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>You bring unique strengths and perspectives to the team. We're looking to build a diverse team where our skills and experience can complement each other.</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>You've experienced the pain of fragmented tools and information silos created by them, and have a strong urge to fix it.</p>
                        </div>
                    </div>

                    <h2>What you will get</h2>
                    <div className='job-container'>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Net salary range</p>
                            <span style={{ fontFamily: 'OnestBold' }}>$2000 - $4000</span>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Working on international projects with new technologies</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Helpful, friendly, down-to-earth colleagues</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Remote work, in-office or hybrid</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Trainings and career development opportunities</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>English language courses</p>
                        </div>
                        <div>
                            <Image src={marker} className="marker" />
                            <p>Team building activities</p>
                        </div>
                    </div>
                    <p>We hire talented and passionate people from a variety of backgrounds because we want our global employee base to represent the wide diversity of our customers. If you’re excited about a role but your past experience doesn’t align perfectly with every bullet point listed in the job description, we still encourage you to apply. If you’re a builder at heart, share our company values, and enthusiastic about growing the digital world, we want to hear from you.</p>
                </Row>
            </div>
            <div className="job-footer">
                <div className='job-footer-bg'>
                    <Image src={star3D} className="star3D" />
                    <h1>Sounds interesting?</h1>
                    <p>Send us your resume and we will <br></br>get back as soon as possible</p>
                    <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center" style={{ margin: '15px auto 0 auto',boxShadow:'none' }}>
                        <span>apply now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Job;