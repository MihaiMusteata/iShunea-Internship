import React, { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import '../styles/blog.css';
import { Box, Center, Flex, Image, Text, Heading } from "@chakra-ui/react"
import { responsive, gallery, bell, call_to_actionImage, services, icons, progress, projects, news } from './Helper';

const Blog = () => {
    // const convertToDate = (dateString) => {
    //     const [month, day, year] = dateString.split(" ");
    //     const monthIndex = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].indexOf(month);
    //     return new Date(year, monthIndex, parseInt(day, 10));
    // };
    // console.log(news[0].date)
    // console.log(convertToDate(news[0].date));
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(news);
    let filters = ["all articles", "insight", "discount", "partnership"];
    const windowsWidth = window.innerWidth;
    const orders = [
        [0, 2, 1, 3],
    ];
    if (windowsWidth > 768) {
        orders.push([1, 3, 0, 2]);
    }
    if (windowsWidth > 1024) {
        orders.push([3, 1, 2, 0]);
    }
    if (windowsWidth > 1200) {
        orders.push([2, 0, 3, 1]);
    }


    const handleFilterButtonClick = (selectedTag) => {
        if (selectedTag === "all articles") {
            const isAllArticlesSelected = selectedFilters.includes("all articles");
            setSelectedFilters(isAllArticlesSelected ? [] : [selectedTag]);
        } else if (selectedFilters.includes(selectedTag)) {
            let filters = selectedFilters.filter((el) => el !== selectedTag);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedTag]);
        }
    };

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);

    const filterItems = () => {
        if (selectedFilters.length > 0 && !selectedFilters.includes("all articles")) {
            let tempItems = selectedFilters.map((selectedTag) => {
                let temp = news.filter((item) => item.tag === selectedTag);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...news]);
        }
    };

    return (
        <div className="white-container" style={{ padding: '100px 30px 0 30px' }}>
            <div className="blog-header row" style={{ width: 'auto' }}>
                <h1 className="col-lg-2 col-md-12 col-sm-12 mb-4">Blog</h1>
                <div className='blog-filter col-lg-7 col-md-12 mb-4' style={{ marginLeft: '1px', width: 'auto' }}>
                    <span>show</span>
                    {filters.map((tag, idx) => (
                        <button
                            onClick={() => handleFilterButtonClick(tag)}
                            className={`${selectedFilters?.includes(tag) ? "active" : "button"}`}
                            key={`filters-${idx}`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div className='blog-sort col-lg-2 col-md-2 mb-4' style={{ margin: '0', width: 'auto' }}>
                    <span>sort</span>
                    <Dropdown style={{ display: 'inline-flex' }}>
                        <Dropdown.Toggle className="dropdown-sort" style={{ marginLeft: '10px', color: 'black', fontFamily: 'Onest', fontSize: '16px', fontWeight: '700', lineHeight: '24px', letterSpacing: '0em', textAlign: 'center', padding: '5px 20px 5px 20px', width: 'auto', cursor: 'pointer', background: 'white', borderRadius: '100px', border: 'rgba(255, 255, 255, 0)', appearance: 'none', border: '1px solid #8aa2a96b' }}>
                            default order
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className="bold-text text-dark dropdown-item">default order</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="bold-text text-dark dropdown-item">old to new</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="bold-text text-dark dropdown-item">new to old</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>


            <div className='box-cont'>
                {orders.map((order, boxIndex) => (
                    <div className='box' key={`box-${boxIndex}`}>
                        {order.map((index) => {
                            const itemTag = filteredItems[index]?.tag;
                            const shouldDisplay = selectedFilters.length === 0 || selectedFilters.includes(itemTag) || selectedFilters.includes("all articles");
                            return (
                                shouldDisplay ? (
                                    <Box p="5" position="relative" textAlign="left" key={`box-item-${index}`}>
                                        <div className={`blog-type-${filteredItems[index]?.type}`}>
                                            {/* Onclick go to artcile page */}
                                            <Image src={filteredItems[index]?.image} className={filteredItems[index]?.type === 2 ? 'slide' : 'blog-image'} onClick={() => window.location.href = `/article`} />
                                            <Text className="tag">{itemTag}</Text>
                                        </div>
                                        <div style={{ width: '100%' }}>
                                            <Heading className='blog-title'>{filteredItems[index]?.title}</Heading>
                                            <Text className='blog-date'>{filteredItems[index]?.date}</Text>
                                        </div>
                                    </Box>
                                ) : (
                                    <Box p="5" position="relative" textAlign="left" key={`box-item-${index}`} style={{ display: 'none' }}>
                                    </Box>
                                )
                            );
                        })}
                    </div>
                ))}
            </div>
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
        </div>
    );
}

export default Blog;