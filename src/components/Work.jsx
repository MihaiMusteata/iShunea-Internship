import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import '../styles/work.css';
import '../styles/blog.css';
import { Box, Center, Flex, Image, Text, Heading, Card, CardFooter, CardBody, Stack, ChakraProvider } from "@chakra-ui/react"
import { responsive, gallery, mobileStore, icons, progress, projects, pages } from './Helper';
const Work = () => {
    const orders = [
        [0, 1, 2],
        [3, 4, 5, 6],
        [7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16],
    ]
    return (
        <div className="work">
            <div className="work-header">
                <div className="work-header-text">
                    <div className="work-header-bg">
                        <Image src={mobileStore} style={{ height: '862px', width: '100%', objectFit: 'cover' }} />

                        <div style={{ position: 'absolute', top: '400px', left: '5%' }}>
                            <h1>Xiaomi Store</h1>
                            <p>One of the leading players on the global market. Moldova did not become an exception to this rule either. The current site needs a fresh and clean look.</p>
                            <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center" style={{ boxShadow: 'none' }} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe bold-text" viewBox="0 0 16 16" style={{ marginRight: '10px' }}>
                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                                </svg>
                                <span>visit website</span>
                            </button>
                        </div>
                        <div className="work-call-to-action" style={{ marginTop: '100px', marginBottom: '100px' }}>
                            <h1 style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '20px' }}>Main challenge</h1>
                            <p style={{ textAlign: 'center', margin: '0 auto', width: '63%' }}>There are many e-commerce platforms on the Moldovan market. Some have a wide list of categories and products, others operate with well-structured filtering. Another one keeps the checkout process as fast as possible. Putting it all together and seasoning with the brand of Xiaomi, we get the best solution possible.</p>
                            <div className='work-divider'></div>
                            <div className="work-icon row">
                                {icons.slice(18, 21).map((icon) => (
                                    <div className="work-icon-item col-lg-4" style={{ textAlign: 'left', padding: '0 50px' }}>
                                        <Image src={icon.icon} />
                                        <h3>{icon.title}</h3>
                                        <p>{icon.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='white-container' style={{ borderRadius: '50px 50px 0 0', padding: '0 50px 50px 50px' }}>
                <div className='col-lg-6' style={{ textAlign: 'left', padding: '50px 0 30px 0   ' }}>
                    <h1>Fresh-looking final solution</h1>
                    <p>Along with beautifully crafted homepage there is a catalogue section with well-structured hierarchy and functional filters</p>
                </div>
                <div className='box-cont' style={{ position: 'relative' }}>
                    <div className="white-overlay"> </div>
                    {orders.map((order) => (
                        <div className='box'>
                            {order.map((item) => (
                                <Image src={pages[item]} />
                            ))
                            }
                        </div>
                    ))}
                </div>
                <div className="work-message">
                    <h3>“iShunea is one of our key technology partners;<br></br>they helped us build and launch two business critical websites. I could not wish for a better partner. Thank you a lot!”</h3>
                    <h4>Andrew Rusnak</h4>
                    <p>CEO at SRL Mobile Stock</p>
                </div>
            </div>
        </div>
    );
}

export default Work;