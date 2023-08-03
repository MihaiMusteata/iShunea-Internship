import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-multi-carousel/lib/styles.css";
import '../styles/work.css';
import { Box, Center, Flex, Image, Button, Text, ChakraProvider, Card, Heading, CardBody, Stack, CardFooter, Divider } from "@chakra-ui/react"
import { responsive, carterImage, carouselSettings, agroconexImage, call_to_actionImage, services, icons, progress, projects, news } from './Helper';

const Works = () => {
    const windowsWidth = window.innerWidth;
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState();
    let filters = ["all", "software development", "mobile applications", "ux/ui design", "graphic design", "maintenance", "seo", "video security", "eterprise systems"];
    const handleFilterButtonClick = (selectedTag) => {
        if (selectedTag === "all") {
            const isAllArticlesSelected = selectedFilters.includes("all");
            setSelectedFilters(isAllArticlesSelected ? [] : [selectedTag]);
        } else if (selectedFilters.includes(selectedTag)) {
            let filters = selectedFilters.filter((el) => el !== selectedTag);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedTag]);
        }
    };
    return (
        <div className="works">
            <div className="white-container">
                <h1 style={{padding : '100px 0 50px 0'}}>Case studies</h1>
                {filters.map((tag, idx) => (
                    <button
                        onClick={() => handleFilterButtonClick(tag)}
                        className={`${selectedFilters?.includes(tag) ? "active" : "button"}`}
                        key={`filters-${idx}`}
                    >
                        {tag}
                    </button>
                ))}
                <div className="projects-container" >
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
                                                    <div className="img-wrapper" style={{ width: '302px', height: '360px' }}>
                                                        <Image src={project.image} className="slide" style={{ width: '302px', height: '360px' }} />
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
        </div>
    );
}

export default Works;