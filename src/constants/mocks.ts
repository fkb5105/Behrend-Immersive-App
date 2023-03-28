import dayjs from 'dayjs';
import { t } from 'i18n-js';
import { Description } from '../screens';
import {
  IGallery,
  IGalleryOptions,
  ICategory,
  IObjects,
  IExtra,
  ILocation,
  INotification,
  IDescription,
  IProduct,
  IUser,
} from './types';

// users
export const USERS: IUser[] = [
  {
    id: 1,
    name: 'Devin Coldewey',
    department: 'Marketing Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80',
  },
  {
    id: 2,
    name: 'Bella Audrey',
    department: 'Marketing Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80',
  },
  {
    id: 3,
    name: 'Miriam Lendra',
    department: 'Desktop Publisher',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80',
  },
  {
    id: 4,
    name: 'David Bishop',
    department: 'Marketing Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
  },
  {
    id: 5,
    name: 'Mathew Glock',
    department: 'HR Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
  },
  {
    id: 6,
    name: 'Emma Roberts',
    department: 'HR Manager',
    stats: {posts: 323, followers: 53200, following: 749000},
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?fit=crop&w=80&q=80',
  },
];
// Objects
export const OBJECTS: IObjects[] = [
  {
    id: 1,
    title: 'High Chair',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 2,
    title: 'Griswaold Iron',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 3,
    title: 'Wash Tub',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 4,
    title: 'Metal Highchair',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 5,
    title: 'Camera',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 6,
    title: 'Sewing Machine',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 7,
    title: 'Wooden Shoes',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 8,
    title: 'Cheese Box',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 9,
    title: 'Phone',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 10,
    title: 'Telescope',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 11,
    title: 'Radio',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 12,
    title: 'Nittany Lion',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  }
]

// following cards
export const WELCOME: IProduct[] = [
  {
    id: 1,
    type: 'horizontal',
    title: "Compare Behrend's campus past and present.",
    linkLabel: 'Maps',
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    type: 'horizontal',
    title: "Immerse yourself in Behrend's history with AR",
    linkLabel: 'AR Gallery',
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    type: 'horizontal',
    title: "Learn more about the Behrend's history",
    linkLabel: 'History',
    image:
      'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80',
  },
  {
    id: 4,
    type: 'horizontal',
    title: 'Check out these 3-D models created by VAR Labs.',
    linkLabel: 'Objects',
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
  },
  {
    id: 5,
    type: 'horizontal',
    title: 'Meet the VAR Labs team and see what else we are working on.',
    linkLabel: 'About',
    image:
      'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80',
  },
];


// categories
export const CATEGORIES: ICategory[] = [
  {id: 1, name: 'Nearest'},
  {id: 2, name: 'AR'},
  {id: 3, name: 'Recommended'},
  {id: 4, name: 'Most Visited'},
];

// gallery options
export const GALLERY_OPTIONS: IGalleryOptions[] = [
  {
    id: 1,
    title: 'Single room in center',
    description:
      'As Uber works through a huge amount of internal management turmoil, the company is also consolidating.',
    type: 'room',
    guests: 1,
    sleeping: {total: 1, type: 'sofa'},
    price: 89,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    title: 'Cosy apartment',
    description:
      'Different people have different taste, and various types of music have many ways of leaving an impact on someone.',
    type: 'apartment',
    guests: 3,
    sleeping: {total: 2, type: 'bed'},
    price: 200,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1603034203013-d532350372c6?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    title: 'Single room in center',
    description:
      'As Uber works through a huge amount of internal management turmoil, the company is also consolidating.',
    type: 'room',
    guests: 1,
    sleeping: {total: 1, type: 'sofa'},
    price: 89,
    user: USERS[0],
    image:
      'https://images.unsplash.com/photo-1543489822-c49534f3271f?fit=crop&w=450&q=80',
  },
];

// offers
export const OFFERS: IProduct[] = [
  {
    id: 1,
    type: 'vertical',
    title: 'Unique activities with local experts.',
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
  },
  {
    id: 2,
    type: 'vertical',
    title: 'The highest status people.',
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
  },
  {
    id: 3,
    type: 'vertical',
    title: 'Get more followers and grow.',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?fit=crop&w=450&q=80',
  },
  {
    id: 4,
    type: 'vertical',
    title: 'New ways to meet your business goals.',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
  },
];

// rental locations
export const LOCATIONS: ILocation[] = [
  {id: 1, city: 'Paris', country: 'France'},
  {id: 2, city: 'Rome', country: 'Italy'},
  {id: 3, city: 'London', country: 'United Kingdom'},
];

// gallerys
export const GALLERIES: IGallery[] = [
  {
    id: 1,
    title: 'Flexible office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[0],
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    location: LOCATIONS[0],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 2,
    title: 'Global payments in a single integration.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay.',
    category: CATEGORIES[0],
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
    location: LOCATIONS[1],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 3,
    title: 'Working with the latest technologies.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[0],
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80',
    location: LOCATIONS[3],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 4,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[0],
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    location: LOCATIONS[2],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 5,
    title: 'Office space means growth.',
    description: `The mission of LinkedIn is simple: connect the world's professionals.`,
    category: CATEGORIES[1],
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?fit=crop&w=450&q=80',
    location: LOCATIONS[0],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 6,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[1],
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    location: LOCATIONS[2],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 7,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[1],
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    location: LOCATIONS[1],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 8,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[2],
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    location: LOCATIONS[3],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 9,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[2],
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    location: LOCATIONS[1],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 10,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[2],
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    location: LOCATIONS[0],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 11,
    description:
      'A great to stay in Paris without feeling you are in the city!',
    category: CATEGORIES[3], // best deal
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80',
    location: LOCATIONS[0],
    rating: 4.9,
    timestamp: dayjs().unix(),
  },
  {
    id: 12,
    description: 'Best Italy location in a bustling neighbourhood, 2 min.',
    category: CATEGORIES[3], // best deal
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
    location: LOCATIONS[1],
    rating: 4.5,
    timestamp: dayjs().unix(),
  },
  {
    id: 13,
    description:
      'The most beautiful and complex UI Kits built by Creative Tim.',
    category: CATEGORIES[3], // best deal
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
    location: LOCATIONS[2],
    rating: 4.8,
    timestamp: dayjs().unix(),
  },
];

// rental recommendations
export const RECOMMENDATIONS: IGallery[] = [
  {
    id: 1,
    description:
      'A great to stay in Paris without feeling you are in the city!',
    category: CATEGORIES[3], // best deal
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80',
    location: LOCATIONS[0],
    rating: 4.9,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
  {
    id: 2,
    description: 'Best Italy location in a bustling neighbourhood, 2 min.',
    category: CATEGORIES[3], // best deal
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
    location: LOCATIONS[1],
    rating: 4.5,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
  {
    id: 3,
    description:
      'The most beautiful and complex UI Kits built by Creative Tim.',
    category: CATEGORIES[3], // best deal
    options: GALLERY_OPTIONS,
    image:
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
    location: LOCATIONS[2],
    rating: 4.8,
    offers: OFFERS,
    timestamp: dayjs().unix(),
  },
];
// gallery description data
export const DESCRIPTION: IDescription[] = [
  {
    id: 1,
    title: 'Tomato',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 2,
    title: 'Onion',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 3,
    title: 'Potato',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 4,
    title: 'Garlic',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 5,
    title: 'Squash',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 6,
    title: 'Carrot',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 7,
    title: 'Spinach',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 8,
    title: 'Lettuce',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 9,
    title: 'Pepper',
    image: [
            'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
            'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
          ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 10,
    title: 'Oregano',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 11,
    title: 'Basil',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 12,
    title: 'Cilantro',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 13,
    title: 'Avocado',
    image: [
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80'
    ],
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
]
// extras cards
export const EXTRAS: IExtra[] = [
  {
    id: 1,
    name: 'BMW X5',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/x5.png'),
    saved: false,
    booked: false,
    available: true,
  },
  {
    id: 2,
    name: 'Tesla',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/tesla.png'),
    saved: false,
    booked: false,
    available: true,
  },
  {
    id: 3,
    name: 'Mercedes GLE',
    time: dayjs().format('hh:00'),
    image: require('../assets/images/gle.png'),
    saved: false,
    booked: false,
    available: false,
  },
];

// notifications
export const NOTIFICATIONS: INotification[] = [
  {
    id: 1,
    subject: 'New Message',
    message: 'You have a new message from the owner.',
    type: 'document',
    business: true,
    read: false,
    createdAt: dayjs().subtract(2, 'h').toDate(),
  },
  {
    id: 2,
    subject: 'New Order',
    message: 'A confirmed request by one client.',
    type: 'extras',
    business: true,
    read: false,
    createdAt: dayjs().subtract(4, 'h').toDate(),
  },
  {
    id: 3,
    subject: 'New Likes',
    message: 'Your posts have been liked by 2,342.',
    type: 'notification',
    business: true,
    read: true,
    createdAt: dayjs().subtract(6, 'h').toDate(),
  },
  {
    id: 4,
    subject: 'Last Message',
    message: 'Your posts have been liked by 2,342.',
    type: 'document',
    business: true,
    read: true,
    createdAt: dayjs().subtract(2, 'd').toDate(),
  },
];

export default {
  USERS,
  WELCOME,
  CATEGORIES,
  OBJECTS,
  GALLERIES,
  RECOMMENDATIONS,
  DESCRIPTION,
  EXTRAS,
  NOTIFICATIONS,
};
