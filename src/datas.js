let xAxisData = [
    {
        "name": 'Jan',
        "Sale": 112_000
    },
    {
        "name": 'Feb',
        "Sale": 99_000
    },
    {
        "name": 'Mar',
        "Sale": 12_090
    },
    {
        "name": 'Apr',
        "Sale": 99_000
    },
    {
        "name": 'May',
        "Sale": 54_000
    },
    {
        "name": 'Jun',
        "Sale": 85_000
    },
    {
        "name": 'Jul',
        "Sale": 34_000
    },
    {
        "name": 'Agu',
        "Sale": 18_598
    },
    {
        "name": 'Sep',
        "Sale": 0
    },
    {
        "name": 'Oct',
        "Sale": 73_078
    },
    {
        "name": 'Nov',
        "Sale": 12_900
    },
    {
        "name": 'Dev',
        "Sale": 97_000
    },
]

const newMembers = [
    {
        id: 1,
        username: "AmirMohammad",
        title: "Web Developer",
        img: 'images/me.jpg'
    },
    {
        id: 2,
        username: "Sasan Moq",
        title: "seo Eng",
        img: 'images/me.jpg'
    },
    {
        id: 3,
        username: "Zahra Aghayi",
        title: "Weblog",
        img: 'images/me.jpg'
    },
    {
        id: 4,
        username: "Qadir Yolme",
        title: "Hacker",
        img: 'images/me.jpg'
    },
]

const transAction = [
    {
        id: 1,
        customer: "Gadir Yolme",
        date: "13 Jul 2024",
        amount: '$123',
        status: "Declined",
        img: "images/me.jpg"
    },
    {
        id: 2,
        customer: "Amin Saeedi",
        date: "24 May 2024",
        amount: '$124',
        status: "Approved",
        img: "images/me.jpg"
    },
    {
        id: 3,
        customer: "Mohammad Qol",
        date: "12 Jun 2024",
        amount: '$125',
        status: "Pending",
        img: "images/me.jpg"
    },
    {
        id: 4,
        customer: "Sasan Moq",
        date: "1 Feb 2024",
        amount: '$126',
        status: "Approved",
        img: "images/me.jpg"
    },
]

let userRows = [
    {
        id: 1,
        username: "Qadir Yolme",
        avatar: "images/me.jpg",
        status: "active",
        transaction : '$129.54',
        email: 'Qadir@gmail.com'
    },
    {
        id: 2,
        username: "Amin saeedi",
        avatar: "images/me.jpg",
        status: "non-active",
        transaction : '$110',
        email: 'amin@gmail.com'
    },
    {
        id: 3,
        username: "Sasan Moq",
        avatar: "images/me.jpg",
        status: "active",
        transaction : '$98',
        email: 'sasan@gmail.com'
    },
    {
        id: 4,
        username: "Zahra Aghayi",
        avatar: "images/me.jpg",
        status: "active",
        transaction : '$0',
        email: 'zahra@gmail.com'
    },
    {
        id: 5,
        username: "Hamze Mohammadi",
        avatar: "images/me.jpg",
        status: "active",
        transaction : '$55.98',
        email: 'hamze@gmail.com'
    },
]

let products = [
    {
        id: 1,
        title: 'Asus',
        avatar: 'images/me.jpg',
        price: 980
    },
    {
        id: 2,
        title: 'Acer',
        avatar: 'images/me.jpg',
        price: 985
    },
    {
        id: 3,
        title: 'HP',
        avatar: 'images/me.jpg',
        price: 910
    },
    {
        id: 4,
        title: 'Dell',
        avatar: 'images/me.jpg',
        price: 949
    },
]

const productsData = [
    {
        name: 'Jan',
        sales: "4000",
    },
    {
        name: 'Feb',
        sales: "3000",
    },
    {
        name: 'Mar',
        sales: "8000"
    }
]

export {xAxisData, newMembers, transAction, userRows, products, productsData}
