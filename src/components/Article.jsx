import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Image, Box, ChakraProvider, Center, Flex } from "@chakra-ui/react"
import { bell, articleImage, articleSlider, caption, responsive } from './Helper';

const carouselSettings = {
    showDots: false,
    additionalTransfrom: -20,
    arrows: false,
    responsive: responsive,
    autoPlay: true,
    autoPlaySpeed: 3000,
    infinite: true,
};

const Article = () => {
    return (
        <div className='white-container' >
            <div className="article">
                <h1>New Partnership with Nicolae Testemițanu State University of Medicine and Pharmacy</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>October 07, 2022</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16" opacity={0.5}>
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    <div className="article-tag">partnership</div>
                </div>
            </div>
            <Image src={articleImage} width={'100%'} margin={'100px 0 100px 0'} />
            <div className="article-content">
                <p>
                    For athletes, high altitude produces two contradictory effects on performance. For explosive events the reduction in atmospheric pressure means there is less resistance from the atmosphere and the athlete's performance will generally be better at high altitude.
                </p>
                <h2>How to build a loyal community online</h2>
                <h4>Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.
                    The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals</h4>
            </div>
            <div style={{ margin: '0 auto' }}>
                <Carousel {...carouselSettings}>
                    {articleSlider.map((slide) => (
                        <Box p="5" position="relative" display="flex" justifyContent="center" alignItems="center" >
                            <div className='img-wrapper'>
                                <Image src={slide} className="slide" />

                            </div>
                        </Box>
                    ))}
                </Carousel>
            </div>
            <div className="article-content">
                <h4>
                    Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework.
                    In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic. According to Kant, knowledge about space is synthetic, in that statements about space are not simply true by virtue of the meaning of the words in the statement. In his work, Kant rejected the view that space must be either a substance or relation. Instead he came to the conclusion that space and time are not discovered by humans to be objective features of the world, but imposed by us as part of a framework for organizing experience.
                </h4>
            </div>
            <Image src={caption} width={'90%'} borderRadius={20} margin={'100px 0 100px 0'} />
            <div className="blog-footer">
                <div className='blog-footer-bg'>
                    <Image src={bell} className="bell" />
                    <h1 className="col-lg-4 col-md-7 col-sm-8">Never miss any article from us</h1>
                    <div className="row">
                        <input type="text" placeholder="E-mail address" className="blog-subscribe col" />
                        <button variant='warning' className="contact-btn text-dark d-flex align-items-center justify-content-center col " style={{ margin: '15px auto 0 auto', boxShadow: 'none' }}>
                            <span>subscribe</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Article;