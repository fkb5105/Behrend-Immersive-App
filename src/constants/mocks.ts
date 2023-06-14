import dayjs from 'dayjs';
import { t } from 'i18n-js';

import {
  IGallery,
  ICategory,
  IHistory,
  IDescription,
  IProduct,
} from './types';



// following cards
export const WELCOME: IProduct[] = [
  {
    id: 1,
    type: 'horizontal',
    title: "Compare Behrend's campus past and present.",
    linkLabel: 'Maps',
    image:
      'https://immersiveapp.s3.us-east-2.amazonaws.com/Objects/img134.jpg',
  },
  {
    id: 2,
    type: 'horizontal',
    title: "Immerse yourself in Behrend's history with AR",
    linkLabel: 'AR Gallery',
    image:
    'https://blog.hubspot.com/hubfs/Augmented-reality-customer-experience.jpg',
    
  },
  {
    id: 3,
    type: 'horizontal',
    title: "Learn more about the Behrend's history",
    linkLabel: 'History',
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/ernstwithbaby.jpg',
  },
  {
    id: 4,
    type: 'horizontal',
    title: 'Check out these 3-D models created by VAR Labs.',
    linkLabel: 'Objects',
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/objects_menu.png',
  },
  {
    id: 5,
    type: 'horizontal',
    title: 'Meet the VAR Labs team and see what else we are working on.',
    linkLabel: 'About',
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/about-pic.png',
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
  {
    id:5,
    title: 'Mary Behrend',
    imageURL: 'https://www.48ws.com/images/product/S/A/daltile-sa55-1x1-slate-radiance-flint-1-x-1-random-tile.jpg',
    description:'Meet Mary Behrend',
    linkLabel:'Learn More',
    type: 'vertical',
  },
  {
    id:6,
    title: 'Ernst Behrend',
    imageURL: 'https://www.48ws.com/images/product/S/A/daltile-sa55-1x1-slate-radiance-flint-1-x-1-random-tile.jpg',
    description:'Meet Ernst Behrend',
    linkLabel:'Learn More',
    type: 'vertical',
  },
  {
    id:7,
    title: 'Harriet Behrend',
    imageURL: 'https://www.48ws.com/images/product/S/A/daltile-sa55-1x1-slate-radiance-flint-1-x-1-random-tile.jpg',
    description:'Meet Harriet Behrend',
    linkLabel:'Learn More',
    type: 'vertical',
  },
  {
    id:8,
    title: 'Warren Behrend',
    imageURL: 'https://www.48ws.com/images/product/S/A/daltile-sa55-1x1-slate-radiance-flint-1-x-1-random-tile.jpg',
    description:'Meet Warren Behrend',
    linkLabel:'Learn More',
    type: 'vertical',
  }
]


export const CATEGORIES: ICategory[] = [
  { id: 1, name: 'Tour'},
  { id: 2, name: 'Recommended' },
  { id: 3, name: 'Most Visited' },
];


// rental locations

// gallerys
export const GALLERIES: IGallery[] = [
  {
    id: 1,
    title: 'Flexible office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same aaa.',
    category:[1, 2],
    arLink: 'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/harrietBruno.png',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1604998103924-89e012e5265a?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 2,
    title: 'Global payments in a single integration.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay.',
      category:[1, 3],
    arLink: 'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/horseerb.jpg',
    latitude: 42.119031,
    longitude: -79.983751,
    image:
      'https://images.unsplash.com/photo-1563492065599-3520f775eeed?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 3,
    title: 'Working with the latest technologies.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
      category:[1, 2],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 4,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category:[1, 3],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 5,
    title: 'Office space means growth.',
    description: `The mission of LinkedIn is simple: connect the world's professionals.`,
    category:[1, 2],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 6,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category:[1, 3],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 7,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
      category:[1, 2],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 8,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category:[1, 3],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 9,
    title: 'Office space means growth.',
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category:[1, 2],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 10,
    description:
      'Rather than worrying about switching offices every couple years, you can instead stay in the same location.',
    category:[1, 3],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 11,
    description:
      'A great to stay in Paris without feeling you are in the city!',
    category:[1, 2],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 12,
    description: 'Best Italy location in a bustling neighbourhood, 2 min.',
    category:[1, 3],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1529154036614-a60975f5c760?fit=crop&w=450&q=80',
    timestamp: dayjs().unix(),
  },
  {
    id: 13,
    description:
      'The most beautiful and complex UI Kits built by Creative Tim.',
    category:[1, 2],
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?fit=crop&w=450&q=80',
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
  WELCOME,
  CATEGORIES,
  HISTORY,
  GALLERIES,
  DESCRIPTION,
};
