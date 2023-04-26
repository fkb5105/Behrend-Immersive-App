import dayjs from 'dayjs';
import { t } from 'i18n-js';
import { calculateDistance } from '../utils/helpers';

import {
  IGallery,
  ICategory,
  IObjects,
  IHistory,
  IUser,
  ILocation,
  IDescription,
  IProduct,
} from './types';

// users
export const USERS: IUser[] = [
  {
    id: 1,
    name: 'Devin Coldewey',
    position: 'Marketing Manager',
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?fit=crop&w=80&q=80',
  },
  {
    id: 2,
    name: 'Bella Audrey',
    position: 'Marketing Manager',
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80',
  },
  {
    id: 3,
    name: 'Miriam Lendra',
    position: 'Marketing Manager',
    social: {twitter: 'CreativeTim', dribbble: 'creativetim'},
    about:
      'Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=80&q=80',
  },
  {
    id: 4,
    name: 'David Bishop',
    position: 'Marketing Manager',
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
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 2,
    title: 'Griswaold Iron',
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 3,
    title: 'Wash Tub',
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 4,
    title: 'Metal Highchair',
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 5,
    title: 'Camera',
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 6,
    title: 'Sewing Machine',
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 7,
    title: 'Wooden Shoes',
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 8,
    title: 'Cheese Box',
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 9,
    title: 'Phone',
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 10,
    title: 'Telescope',
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 11,
    title: 'Radio',
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    link: 'https://sketchfab.com/models/787f66879cf0417b8ab8be0f0ff073e8/embed-ar',
    linkLabel: 'View Model',
  },
  {
    id: 12,
    title: 'Nittany Lion',
    imageURL:'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
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
export const HISTORY: IHistory[] = [
  {
    id:1,
    title: 'Glenhill Farm',
    imageURL: 'https://www.48ws.com/images/product/S/A/daltile-sa55-1x1-slate-radiance-flint-1-x-1-random-tile.jpg',
    description:'Explore the home of the Behrends',
    linkLabel:'Learn More',
    type: 'horizontal',
  },
  {
    id:2,
    title: 'Turnbull Building',
    imageURL: 'https://www.48ws.com/images/product/S/A/daltile-sa55-1x1-slate-radiance-flint-1-x-1-random-tile.jpg',
    description:"Don't know what Turnbull was",
    linkLabel:'Learn More',
    type: 'horizontal'
  },
  {
    id:3,
    title: 'Hamermill Factory',
    imageURL: 'https://www.48ws.com/images/product/S/A/daltile-sa55-1x1-slate-radiance-flint-1-x-1-random-tile.jpg',
    description:'Sentence for Hamermill Factory',
    linkLabel:'Learn More',
    type: 'vertical',
  },
  {
    id:4,
    title: 'Behrend Family',
    imageURL: 'https://www.48ws.com/images/product/S/A/daltile-sa55-1x1-slate-radiance-flint-1-x-1-random-tile.jpg',
    description:'Meet the Behrend family',
    linkLabel:'Learn More',
    type: 'vertical',
  },
]

// categories
interface ICategoryWithSortFunction extends ICategory {
  sortFunction?: (a: IGallery, b: IGallery) => number;
}

export const CATEGORIES: ICategoryWithSortFunction[] = [
  { id: 1, name: 'Nearest', sortFunction: (a, b) => calculateDistance(a.location, USER_LOCATION) - calculateDistance(b.location, USER_LOCATION) },
  { id: 3, name: 'Recommended' },
  { id: 4, name: 'Most Visited' },
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
    category: CATEGORIES[3],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    location: LOCATIONS[2],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 2,
    title: 'Global payments in a single integration.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay.',
    category: CATEGORIES[1],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
    location: LOCATIONS[3],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 3,
    title: 'Working with the latest technologies.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[2],
    latitude: 42.119422,
    longitude: -79.985721,
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
    latitude: 42.119422,
    longitude: -79.985721,
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
    latitude: 42.119422,
    longitude: -79.985721,
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
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    location: LOCATIONS[1],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 7,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category: CATEGORIES[1],
    latitude: 42.119422,
    longitude: -79.985721,
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
    latitude: 42.119422,
    longitude: -79.985721,
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
    latitude: 42.119422,
    longitude: -79.985721,
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
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    location: LOCATIONS[1],
    rating: 4.0,
    timestamp: dayjs().unix(),
  },
  {
    id: 11,
    description:
      'A great to stay in Paris without feeling you are in the city!',
    category: CATEGORIES[3],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80',
    location: LOCATIONS[0],
    rating: 4.9,
    timestamp: dayjs().unix(),
  },
  {
    id: 12,
    description: 'Best Italy location in a bustling neighbourhood, 2 min.',
    category: CATEGORIES[3],
    latitude: 42.119422,
    longitude: -79.985721,
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
    category: CATEGORIES[3],
    latitude: 42.119422,
    longitude: -79.985721,
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

export default {
  USERS,
  WELCOME,
  CATEGORIES,
  OBJECTS,
  HISTORY,
  GALLERIES,
  RECOMMENDATIONS,
  DESCRIPTION,
};
