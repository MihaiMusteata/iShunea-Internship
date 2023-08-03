// Image processing
const pages = [];
for (let i = 0; i <= 16; i++) {
    const page = require(`../images/Page (${i}).svg`);
    pages.push(page);
}

const carterImage = new URL('../images/carter.png', import.meta.url);
const agroconexImage = new URL('../images/agroconex.png', import.meta.url);
const call_to_actionImage = new URL('../images/call-to-action-bg.png', import.meta.url);
const aboutImage = new URL('../images/about-img.png', import.meta.url);
const careersImage = new URL('../images/careers-img.png', import.meta.url);
const articleImage = new URL('../images/article-img.png', import.meta.url);
const services = [
    {
        image: new URL('../images/Service1.png', import.meta.url),
        title: 'Mobile Application',
    },
    {
        image: new URL('../images/Service2.png', import.meta.url),
        title: 'UX/UI Design',
    },
    {
        image: new URL('../images/Service3.png', import.meta.url),
        title: 'Graphic Design',
    },
    {
        image: new URL('../images/Service4.png', import.meta.url),
        title: 'Maintenance',
    },
];
const icons = [
    {
        icon: new URL('../images/Icon1.png', import.meta.url),
        description: 'full cycle product development'
    },
    {
        icon: new URL('../images/Icon2.png', import.meta.url),
        description: 'team of qualified professionals'
    },
    {
        icon: new URL('../images/Icon3.png', import.meta.url),
        description: 'transparent and individual approach'
    },
    {
        icon: new URL('../images/Icon4.png', import.meta.url),
        description: 'high-level security of developed solution'
    },
    {
        icon: new URL('../images/Icon5.png', import.meta.url),
        description: 'up-to-date with new technologies'
    },
    {
        icon: new URL('../images/Icon6.png', import.meta.url),
        description: 'build long-term relationships'
    },
    {
        icon: new URL('../images/Icon7.png', import.meta.url),
        description: ''
    },
    {
        icon: new URL('../images/Icon8.png', import.meta.url),
        description: ''
    },
    {
        icon: new URL('../images/Icon9.png', import.meta.url),
        description: ''
    },
    {
        icon: new URL('../images/Icon10.png', import.meta.url),
        description: ''
    },
    {
        icon: new URL('../images/Icon11.png', import.meta.url),
        description: ''
    },
    {
        icon: new URL('../images/Icon12.png', import.meta.url),
        description: ''
    },
    {
        icon: new URL('../images/Icon13.png', import.meta.url),
        description: 'top of the market salaries'
    },
    {
        icon: new URL('../images/Icon14.png', import.meta.url),
        description: 'health & wellness insurance'
    },
    {
        icon: new URL('../images/Icon15.png', import.meta.url),
        description: 'flexwork just as you need it'
    },
    {
        icon: new URL('../images/Icon16.png', import.meta.url),
        description: 'opportunities for students'
    },
    {
        icon: new URL('../images/Icon17.png', import.meta.url),
        description: 'yearly learning stipend'
    },
    {
        icon: new URL('../images/Icon18.png', import.meta.url),
        description: 'company recharge & team building days'
    },
    {
        icon: new URL('../images/Icon19.png', import.meta.url),
        title: 'Best practices',
        description: 'The main goal was to adapt the current solutions available on the market to a fresh-looking website aligned with global brand.'
    },
    {
        icon: new URL('../images/Icon20.png', import.meta.url),
        title: 'Process transparency',
        description: 'Any step & page is as informative and interactive as possible. No secret paths as everything is available in just one click.'
    },
    {
        icon: new URL('../images/Icon21.png', import.meta.url),
        title: 'Part of the brand',
        description: "Even if visual distinction between the company's global site is acceptable, the entire site should feel like part of the Xiaomi brand."
    },
    {
        icon: new URL('../images/Icon22.png', import.meta.url),
        title: '',
        description: ''
    },
    {
        icon: new URL('../images/Icon23.png', import.meta.url),
        title: '',
        description: ''
    },``
];

const progress = [
    {
        icon: icons[6].icon,
        title: 'Analysis, Discussion & Offer',
        text: 'We analyse your objectives and expectations going through all the requirements. Then we have an estimation of the price & time for product development.',
    },
    {
        icon: icons[7].icon,
        title: 'Research & Wireframing',
        text: 'We set up a wireframe to establish the architecture of the product. This will give everyone the insight on the ‘big picture’ of your risks and opportunities.',
    },
    {
        icon: icons[8].icon,
        title: 'Product Design',
        text: 'Our design team create high-quality prototype of your solution based on the wireframes and going through all the screens and elements. Here we have an iterative process where we design a target blueprint of how your product should look like. We create engaging, user-friendly and stunning designs that will seamlessly communicate with end-users and make you stand out among your competitors.',
    },
    {
        icon: icons[9].icon,
        title: 'Solution Development',
        text: 'Our team of developers build your product using modern coding standards and proven technologies to ensure that it is quickly, secure and scalable.',
    },
    {
        icon: icons[10].icon,
        title: 'Testing & Quality Assurance',
        text: 'The product goes through several testing phases to ensure that there are no bugs or lags and the product itself provides a good user experience. At this stage we prepare you with the documentation on how to manage and update the product. By leveraging a dedicated pool of professional QA engineers, we manage all aspects of testing to meet your objectives, improve quality, and increase release velocity.',
    },
    {
        icon: icons[11].icon,
        title: 'Product Launch',
        text: 'This is not the end of our commitment. We provide technical support for a period of time so you will not be on your own once the work is completed.',
    },
];
const projects = [
    {
        image: new URL('../images/Project1.png', import.meta.url),
        text: 'Carter',
    },
    {
        image: new URL('../images/Project2.png', import.meta.url),
        text: 'Lusition TL',
    },
    {
        image: new URL('../images/Project3.png', import.meta.url),
        text: 'ALO.MD',
    },
    {
        image: new URL('../images/Project4.png', import.meta.url),
        text: 'Tesla',
    },
    {
        image: new URL('../images/Project5.png', import.meta.url),
        text: 'Xiamoi Store',
    },
    {
        image: new URL('../images/Project6.png', import.meta.url),
        text: 'PV -Smart Hydroisolation',
    },
    {
        image: new URL('../images/Project7.png', import.meta.url),
        text: 'Apple',
    },
    {
        image: new URL('../images/Project8.png', import.meta.url),
        text: 'USMF',
    },
    {
        image: new URL('../images/Project9.png', import.meta.url),
        text: 'Darwin',
    },
    {
        image: new URL('../images/Project10.png', import.meta.url),
        text: 'Samsung',
    },
    {
        image: new URL('../images/Project11.png', import.meta.url),
        text: 'Agro Conex',
    },
    {
        image: new URL('../images/Project12.png', import.meta.url),
        text: 'Enter',
    },
];
const news = [
    {
        image: new URL('../images/News1.png', import.meta.url),
        tag: 'insight',
        title: 'The Impact We Have on Our Customers and Our Community',
        date: 'November 27, 2022',
        type: 1,
    },
    {
        image: new URL('../images/News2.png', import.meta.url),
        tag: 'discount',
        title: 'Don’t Forget to Catch Black Friday Free Consultation',
        date: 'November 24, 2022',
        type: 2,
    },
    {
        image: new URL('../images/News3.png', import.meta.url),
        tag: 'insight',
        title: 'What is The Role of Computer in Information Technology?',
        date: 'November 03, 2022',
        type: 3,
    },
    {
        image: new URL('../images/News4.png', import.meta.url),
        tag: 'partnership',
        title: 'New Partnership with Nicolae Testemițanu State University of Medicine and Pharmacy',
        date: 'October 07, 2022',
        type: 4,
    }
];

const gallery = [
    new URL('../images/Gallery1.png', import.meta.url),
    new URL('../images/Gallery2.png', import.meta.url),
    new URL('../images/Gallery3.png', import.meta.url),
    new URL('../images/Gallery4.png', import.meta.url),
    new URL('../images/Gallery5.png', import.meta.url),
    new URL('../images/Gallery6.png', import.meta.url),
    new URL('../images/Gallery7.png', import.meta.url),
    new URL('../images/Gallery8.png', import.meta.url),
    new URL('../images/Gallery9.png', import.meta.url),
    new URL('../images/Gallery10.png', import.meta.url),
    new URL('../images/Gallery11.png', import.meta.url),
    new URL('../images/Gallery12.png', import.meta.url)
];

const articleSlider = [
    new URL('../images/article-slide1.png', import.meta.url),
    new URL('../images/article-slide2.png', import.meta.url),
    new URL('../images/article-slide1.png', import.meta.url),
    new URL('../images/article-slide2.png', import.meta.url),
    new URL('../images/article-slide1.png', import.meta.url),
    new URL('../images/article-slide2.png', import.meta.url),
];

const team = [
    {
        image: new URL('../images/Member1.png', import.meta.url),
        name: 'Alexandru Iaroslavschi',
        position: 'CEO & Founder',
    },
    {
        image: new URL('../images/Member2.png', import.meta.url),
        name: 'Elena Roșca',
        position: 'Co-Founder',
    },
    {
        image: new URL('../images/Member3.png', import.meta.url),
        name: 'Camelia Brashovky',
        position: 'Social Media Manager',
    },
    {
        image: new URL('../images/Member4.png', import.meta.url),
        name: 'Nicolae Erhan',
        position: 'Graphic Designer',
    }
];



const productData = [
    {
        id: 1,
        imageurl:
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Colorful sneakers",
        price: "$19.99",
        description: "Some text about the product..",
    },
    {
        id: 2,
        imageurl:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        name: "Sport sneakers",
        price: "$21.99",
        description: "Some text about the product..",
    },
    {
        id: 3,
        imageurl:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "iWatch",
        price: "$99.99",
        description: "Some text about the product..",
    },
    {
        id: 4,
        imageurl:
            "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Water Bottle",
        price: "$14.99",
        description: "Some text about the product..",
    },
    {
        id: 5,
        imageurl:
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Vans sneakers",
        price: "$38.99",
        description: "Some text about the product..",
    },
    {
        id: 6,
        imageurl:
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Coco Noir",
        price: "$149.99",
        description: "Some text about the product..",
    },
    {
        id: 7,
        imageurl:
            "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Sunglasses",
        price: "$38.99",
        description: "Some text about the product..",
    },
    {
        id: 8,
        imageurl:
            "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        name: "Dove cream",
        price: "$49.99",
        description: "Some text about the product..",
    },
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1530 },
        removeArrowOnDeviceType: true,
        items: 5,
    },
    largeDesktop: {
        breakpoint: { max: 1530, min: 1280 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1280, min: 950 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 950, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

const visitingCards = [
    {
        image: new URL('../images/visiting-card2.png', import.meta.url),
        country: 'Moldova',
        street: 'Sarmizegetusa 53 Street, MD-2032',
        schedule: 'Monday – Friday, 09:00 – 18:00',
        phone: '+373 (78) 158 337'
    },
    {
        image: new URL('../images/visiting-card1.png', import.meta.url),
        country: 'Israel',
        street: 'Nachal Zohar St 4, Bet Shemesh',
        schedule: 'Monday – Friday, 09:00 – 18:00',
        phone: '+972 558-5556-42'
    },
]



const mobileApp = new URL('../images/mobile-app.png', import.meta.url);
const marker = new URL('../images/Marker.png', import.meta.url);
const star3D = new URL('../images/Star.png', import.meta.url);
const bell = new URL('../images/Bell.png', import.meta.url);
const sms = new URL('../images/Sms.png', import.meta.url);
const magnifyingGlass = new URL('../images/MagnifyingGlass.png', import.meta.url);
const caption = new URL('../images/Caption.png', import.meta.url);
const mobileStore = new URL('../images/mobile-store.jpg', import.meta.url);
const Why_iShunea = new URL('../images/Why-iShunea.png', import.meta.url);


const carouselSettings = {
    showDots: false,
    additionalTransfrom: -20,
    arrows: false,
    responsive: responsive,
    autoPlay: true,
    autoPlaySpeed: 3000,
    infinite: true,
};

const life = [
    {
        image: new URL('../images/life (1).png', import.meta.url),
        title: 'Workshops, Meetups & Hackathons',
        description: 'Learn, make impact, have fun. We always support initiative, creativity and passion to learn new things.'
    },
    {
        image: new URL('../images/life (2).png', import.meta.url),
        title: 'Company Gathering Parties',
        description: 'Twice a year there’s a company-wide meeting where all teams enjoy celebrating milestones and success.'
    },
    {
        image: new URL('../images/life (3).png', import.meta.url),
        title: 'Work Without Borders',
        description: 'Whether you want to work at home with your family or travel the world and work along the way.'
    }

]
export { marker, magnifyingGlass, Why_iShunea, sms, life, visitingCards, pages, carouselSettings, mobileStore, bell, mobileApp, caption, star3D, articleImage, productData, responsive, carterImage, articleSlider, agroconexImage, call_to_actionImage, services, icons, progress, projects, news, gallery, team, aboutImage };