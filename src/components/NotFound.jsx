import { magnifyingGlass } from "./Helper";
import { Image } from "@chakra-ui/react";
const NotFound = () => {
    return (
        <div className="white-container" style={{ padding: '100px 30px 0 30px' }}>
            <div className="not-found">
                <div className="not-found-bg" style={{background:'none'}}>
                    <Image src={magnifyingGlass} />
                    <h1>404 Not Found</h1>
                    <p>Return to homepage or send a message to let us know about a link that doesn’t work properly</p>
                    <div className="d-flex flex-column flex-sm-row mb-3 mt-5">
                            <button className="contact-btn text-dark d-flex align-items-center justify-content-center me-5 mt-3" style={{ background: 'linear-gradient(90deg, #FEB700 0%, #FBDF06 100%)', boxShadow: 'none' }}>
                                <span>send message</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                            <button className="contact-btn text-dark d-flex align-items-center justify-content-center me-5 mt-3" style={{ background: 'white', boxShadow: 'none', border: '1px solid black' }}>
                                <span>go to homepage</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-arrow-right-short" viewBox="0 0 16 16" transform='rotate(-45)'>
                                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;