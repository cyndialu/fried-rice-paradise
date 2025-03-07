import houseSpecialImg from '../assets/image/house-special.jpg';
import evelynFavImg from '../assets/image/evelyn-fav.jpg';
import buildYourOwnImg from '../assets/image/build-your-own.JPG';
import zitiImg from '../assets/image/ziti.jpg';
import spaghettiImg from '../assets/image/spaghetti-meatball.jpg';
import meatballImg from '../assets/image/meatball.jpg';
import muffinImg from '../assets/image/muffin.jpg';
import potatoImg from '../assets/image/baked-potatoes.jpg';
import broccoliImg from '../assets/image/broccoli.jpg';
import cookieImg from '../assets/image/cookies.jpg';
import greenBeansImg from '../assets/image/green-beans.jpg';
import healthyLoverImg from '../assets/image/healthy-lover.jpg';

export const MENU = [
    {
        id: 0,
        category: 'Rice',
        name: 'House Special',
        image: houseSpecialImg,
        description:
            'Fried rice with ground beef, mixed vegetables(corn, carrot, sweet peas, and green beans), and egg',
        price: 12.99
    },
    {
        id: 1,
        category: 'Rice',
        name: "Evelyn's Favorite",
        image: evelynFavImg,
        description:
            'Fried rice with sausage, broccoli, and egg',
        price: 13.99
    },
    {
        id: 2,
        category: 'Rice',
        name: "Healthy Lover",
        image: healthyLoverImg,
        description:
            'Fried rice with ground turkey, spinach, sweet corn, and egg',
        price: 13.99
    },
    {
        id: 3,
        category: 'Rice',
        name: 'Build Your Own Bowl',
        image: buildYourOwnImg,
        description:
            'Choose your protein and vegetables from various options',
        price: 11.99
    },
    {
        id: 4,
        category: 'Pasta',
        name: 'Baked Ziti',
        image: zitiImg,
        description:
            'Baked ziti with ground beef',
        price: 14.99
    },
    {
        id: 5,
        category: 'Pasta',
        name: 'Spaghetti and Meatballs',
        image: spaghettiImg,
        description:
            'Spaghetti and beef meatballs',
        price: 15.99
    },
    {
        id: 6,
        category: 'Pasta',
        name: 'Meatballs',
        image: meatballImg,
        description:
            '10 meatballs with dipping sauce',
        price: 11.99
    },
    {
        id: 7,
        category: 'Sides',
        name: "Green Bean Casserole",
        image: greenBeansImg,
        description:
            'Green bean casserole with crunchy fried onion and cheese',
        price: 5.99
    },
    {
        id: 8,
        category: 'Sides',
        name: "Baked Potatoes and Carrots",
        image: potatoImg,
        description:
            'Baked potatoes and carrots',
        price: 5.99
    },
    {
        id: 9,
        category: 'Sides',
        name: "Steamed Broccoli",
        image: broccoliImg,
        description:
            'Steamed broccoli with sesame oil and low sodium soy sauce',
        price: 4.99
    },
    {
        id: 10,
        category: 'Sweet',
        name: 'Muffins',
        image: muffinImg,
        description:
            'Banana muffin with blueberries or chocolate chips',
        price: 2.50
    },
    {
        id: 11,
        category: 'Sweet',
        name: 'Cookies',
        image: cookieImg,
        description:
            'Chocolate chip cookies',
        price: 1.50
    }
];