import dayjs from 'dayjs';
import { t } from 'i18n-js';

import {
  IGallery,
  ICategory,
  IObjects,
  IHistory,
  IDescription,
  IProduct,
  IUser,
} from './types';

export const USERS: IUser[] = [
  {
    id: 1,
    name: 'Felipe Bassi',
    position: 'App Developer',
    linkedIn_url: '',
    description:
      'Short sentence about ourselves',
    image_url:
      'https://var.psu.edu/wp-content/uploads/2023/03/Felipe-Bassi--400x400.jpg',
  },
  {
    id: 2,
    name: 'Daniel Shreiber',
    position: 'Content Creator',
    linkedIn_url: '',
    description:
      'Short sentence about ourselves',
    image_url:
      'https://var.psu.edu/wp-content/uploads/2023/03/Daniel.jpg',
  },
  {
    id: 3,
    name: 'Chris Shelton',
    position: 'Project Supervisor',
    linkedIn_url: '',
    description:'Short sentence about ourselves',
    image_url:
      'https://live-var-labs.pantheonsite.io/wp-content/uploads/2022/08/1-225x300.png',
  },
  {
    id: 4,
    name: 'Remington Orange',
    position: 'TBD',
    linkedIn_url: '',
    description:'Short sentence about ourselves',
    image_url:
      'https://var.psu.edu/wp-content/uploads/2023/02/REMI-025_Original-400x500.jpg',
  },
]

export const OBJECTS: IObjects[] = [
  {
    id: 1,
    title: 'High Chair',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/high-chair.png',
    link: 'https://sketchfab.com/3d-models/late-1800s-highchair-c2b449a3dda44b1e93698aadcc92f1eb',
    linkLabel: 'View Model',
  },
  {
    id: 2,
    title: 'Griswold Iron',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/iron.png',
    link: 'https://sketchfab.com/3d-models/late-1800s-griswold-iron-787f66879cf0417b8ab8be0f0ff073e8',
    linkLabel: 'View Model',
  },
  {
    id: 3,
    title: 'Wash Tub',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/wash-tub.png',
    link: 'https://sketchfab.com/3d-models/mid-late-1800s-wash-tub-288637745ab548b7b9735be0fe4f08ea',
    linkLabel: 'View Model',
  },
  {
    id: 4,
    title: 'Metal Highchair',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/metal-chair.png',
    link: 'https://sketchfab.com/3d-models/mid-1900s-white-wood-and-metal-highchair-228e009333944edabe0bc7980e892b4e',
    linkLabel: 'View Model',
  },
  {
    id: 5,
    title: 'Camera',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/camera.png',
    link: 'https://sketchfab.com/3d-models/mid-1900s-revere-ranger-movie-camera-cc02273ff2a04ad98d4bc4961c4542b1',
    linkLabel: 'View Model',
  },
  {
    id: 6,
    title: 'Sewing Machine',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/sewing-machine.png',
    link: 'https://sketchfab.com/3d-models/mid-1900s-kayanee-sewing-machine-aaef56ba4bb24b9da4314a618871ac22',
    linkLabel: 'View Model',
  },
  {
    id: 7,
    title: 'Wooden Shoes',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/wooden-shoes.png',
    link: 'https://sketchfab.com/3d-models/late-1700-1800s-wooden-work-shoes-b40e07d104cd4dfea9bc067d1656a7a2',
    linkLabel: 'View Model',
  },
  {
    id: 8,
    title: 'Cheese Box',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/cheese-box.png',
    link: 'https://sketchfab.com/3d-models/early-1900s-wooden-kraft-cheese-box-11ce9f1f145440989daaa450c2b67a4a',
    linkLabel: 'View Model',
  },
  {
    id: 9,
    title: 'Telephone',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/telephone.png',
    link: 'https://sketchfab.com/3d-models/early-1900s-kellogg-wall-telephone-b429089cbb5c4eab937ae1a84263d37e',
    linkLabel: 'View Model',
  },
  {
    id: 10,
    title: 'Telescope',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/telescope.png',
    link: 'https://sketchfab.com/3d-models/oliver-perry-telescope-battle-of-lake-erie-4c158215de814dffb87470ec9e1764b3',
    linkLabel: 'View Model',
  },
  {
    id: 11,
    title: 'Radio',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/radio.png',
    link: 'https://sketchfab.com/3d-models/mid-1900s-trail-meck-blazer-radio-d915066854174e96814dc0370faeecf9',
    linkLabel: 'View Model',
  },
  {
    id: 12,
    title: 'Nittany Lion',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/nittany-lion.png',
    link: 'https://sketchfab.com/3d-models/penn-state-behrend-nittany-lion-statue-b9ae812445f5499aa4b2135eed584740',
    linkLabel: 'View Model',
  },
  {
    id: 13,
    title: 'Hamermill Press',
    image_url:'https://varlab.bd.psu.edu/_app/IMMR_BD/objects/hamermill-press.png',
    link: 'https://sketchfab.com/3d-models/hammermill-press-5f61db8b59ed4dd08387ae58dc792eeb',
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
      '',
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
    title: 'Glenhill Farm',
    image_url: [
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/Schilling HouseBecameGlenhill.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/Schilling HouseBecameGlenhill.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/reno2.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/glenhill reno.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/reno.1.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/guarden statue 2.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/guarden statue 1 copy.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/dogserb.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/bruno and family.png'
    ],
    caption: 'Caption for an image',
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 2,
    title: 'Turnbull Building',
    image_url: [
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/OldHouseHorseAndBuggy.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/OldHouseFarmAnimals.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/horses infront of turnbull.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/horseerb.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/girl on diving board.png',
    ],
    caption: 'Caption for an image',
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 3,
    title: 'Hamermill Factory',
    image_url: [
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/ErnstRBehrend1905HammermillPlant.jpg',

    ],
    caption: 'Caption for an image',
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 5,
    title: 'Mary Behrend',
    image_url: [
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/MBB Wedding Dress.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/MaryYoungharp.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/MaryTrees1.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/mary young sh.PNG',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/marry with dogs.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/EddyOttoErnstBehrendInGermany.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/close up photo.png',
    ],
    caption: 'Caption for an image',
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 6,
    title: 'Ernst Behrend',
    image_url: [
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/babofb.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/bruno and family (2).png',      
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/youngernst.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/show horse.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/Otto Behrend.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/MoritzAndRebecca1909.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/ernstwithharriet.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/ernstwithbaby.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/ernsthomehpc.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/Ernst.png',
    ],
    caption: 'Caption for an image',
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 7,
    title: 'Harriet Behrend',
    image_url: [
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/bruno and family (2).png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/MBBWarrenHarriet Sailor.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/HEBWeddingClipping.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/HEBweddingbedroomcolor.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/hb mb wedding dress.PNG',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/harrietBrunoChambers.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/harrietBruno.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/harriet behrend trap shooting.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/GunClubPhoto.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/girl smoking.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/child with sledd.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/child on sled.jpg'
    ],
    caption: 'Caption for an image',
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
  {
    id: 8,
    title: 'Warren Behrend',
    image_url: [
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/ottowarren.jpg',
    ],
    caption: 'Caption for an image',
    description: 'Lose away off why half led have near bed. At engage simple father of period others except. My giving do summer of though narrow marked at. Spring formal no county ye waited. My whether cheered at regular it of promise blushes perhaps. Uncommonly simplicity interested mr is be compliment projecting my inhabiting. Gentleman he september in oh excellent.',
  },
]

export default {
  WELCOME,
  USERS,
  CATEGORIES,
  HISTORY,
  GALLERIES,
  DESCRIPTION,
};
