import dayjs from 'dayjs';
import { t } from 'i18n-js';

import {
  IGallery,
  ICategory,
  IObjects,
  IHistory,
  IDescription,
  IProduct,
  ISponsor,
  IUser,
} from './types';

export const USERS: IUser[] = [
  {
    id: 1,
    name: 'Felipe Bassi',
    position: 'App Developer',
    linkedIn_url: 'https://www.linkedin.com/in/felipe-bassi/',
    description:
      'Short sentence about ourselves',
    image_url:
      'https://var.psu.edu/wp-content/uploads/2023/03/Felipe-Bassi--400x400.jpg',
  },
  {
    id: 2,
    name: 'Daniel Shreiber',
    position: 'Content Creator',
    linkedIn_url: 'https://www.linkedin.com/in/daniel-schreiber-44a9b6266/',
    description:
      'Short sentence about ourselves',
    image_url:
      'https://var.psu.edu/wp-content/uploads/2023/03/Daniel.jpg',
  },
  {
    id: 3,
    name: 'Remington Orange',
    position: 'Content Creator',
    linkedIn_url: 'https://www.linkedin.com/in/remington-orange-38746b266/',
    description:'Short sentence about ourselves',
    image_url:
      'https://var.psu.edu/wp-content/uploads/2023/02/REMI-025_Original-400x500.jpg',
  },
]

export const SPONSOR: ISponsor [] = [
  {
    id:1,
    name: 'Christopher R. Shelton, Ph.D',
    position: 'Assistant Professor of Clinical Psychology',
    company: 'Director, Virtual/Augmanted Reality Lab'
  },
  {
    id:2,
    name: 'Jasper Sachsenmeier, M.Litt',
    position: 'Lecturer in Composition',
    company: 'Coordinator of Testing and Summer Programs, ELSC'
  },
  {
    id:3,
    name: 'Elisa Beshero-Bondar, Ph.D',
    position: 'Professor of Digital Humanities',
    company: 'Director of the Digital Humanities Lab'
  },
  {
    id:4,
    name: 'Jane Ingold',
    position: 'Refrence and Instruction Librarian/Archivist',
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
      'https://varlab.bd.psu.edu/_app/IMMR_BD/imgs/profile/img134.jpg',
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
    imageURL: 'https://varlab.bd.psu.edu/_app/IMMR_BD/imgs/profile/glenhill profile.PNG',
    description:'Explore the home of the Behrends',
    linkLabel:'Learn More',
    type: 'horizontal',
  },
  {
    id:2,
    title: 'Turnbull Building',
    imageURL: 'https://varlab.bd.psu.edu/_app/IMMR_BD/imgs/profile/turbull profile.PNG',
    description:"Don't know what Turnbull was",
    linkLabel:'Learn More',
    type: 'horizontal'
  },
  {
    id:3,
    title: 'Hamermill Factory',
    imageURL: 'https://varlab.bd.psu.edu/_app/IMMR_BD/imgs/profile/hammermil profile.PNG',
    description:'Sentence for Hamermill Factory',
    linkLabel:'Learn More',
    type: 'vertical',
  },
  {
    id:4,
    title: 'Behrend Family',
    imageURL: 'https://varlab.bd.psu.edu/_app/IMMR_BD/imgs/profile/MBBWarrenHarriet Sailor.jpg',
    description:'Meet the Behrend family',
    linkLabel:'Learn More',
    type: 'vertical',
  },
  {
    id:5,
    title: 'Mary Behrend',
    imageURL: 'https://varlab.bd.psu.edu/_app/IMMR_BD/imgs/profile/mary profile.PNG',
    description:'Meet Mary Behrend',
    linkLabel:'Learn More',
    type: 'vertical',
  },
  {
    id:6,
    title: 'Ernst Behrend',
    imageURL: 'https://varlab.bd.psu.edu/_app/IMMR_BD/imgs/profile/ernst profile.PNG',
    description:'Meet Ernst Behrend',
    linkLabel:'Learn More',
    type: 'vertical',
  },
  {
    id:7,
    title: 'Harriet Behrend',
    imageURL: 'https://varlab.bd.psu.edu/_app/IMMR_BD/imgs/profile/harriet profile.PNG',
    description:'Meet Harriet Behrend',
    linkLabel:'Learn More',
    type: 'vertical',
  },
  {
    id:8,
    title: 'Warren Behrend',
    imageURL: 'https://varlab.bd.psu.edu/_app/IMMR_BD/imgs/profile/warren profile.PNG',
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
    description:
      'Harriet Behrend and Bruno',
    category:[1, 2],
    arLink: 'https://skfb.ly/oINJs',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/harrietBruno.png',
    timestamp: dayjs().unix(),
  },
  {
    id: 2,
    description:
      'Ernst Behrend enjoying a drink',
      category:[1, 3],
    arLink: 'https://skfb.ly/oINJw',
    latitude: 42.119031,
    longitude: -79.983751,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/Ernst.png',
    timestamp: dayjs().unix(),
  },
  {
    id: 3,
    description:
      'Glenhill Renovation',
      category:[1, 2],
    arLink: '',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/glenhill reno.png',
    timestamp: dayjs().unix(),
  },
  {
    id: 4,
    description:
      'Harriet and Bruno spending time together',
    category:[1, 3],
    arLink: 'https://skfb.ly/oINJs',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/harrietBrunoChambers.png',
    timestamp: dayjs().unix(),
  },
  {
    id: 5,
    description: `Harriet with Mary's wedding dress`,
    category:[1, 2],
    arLink: 'https://skfb.ly/oINJL',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/HEBweddingbedroomcolor.jpg',
    timestamp: dayjs().unix(),
  },
  {
    id: 6,
  
    description:
      'Otto and Ernst riding horses in front of Turnbull',
    category:[1, 3],
    arLink: 'https://skfb.ly/oINJy',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/horseerb.jpg',
    timestamp: dayjs().unix(),
  },
  {
    id: 7,
    description:
      'Horses pulling a sled in front of turnbull',
      category:[1, 2],
    arLink: '',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/horses infront of turnbull.png',
    timestamp: dayjs().unix(),
  },
  {
    id: 8,
    description:
      'Moritz and Rebecca sitting on a bench',
    category:[1, 3],
    arLink: 'https://skfb.ly/oIXuL',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/MoritzAndRebecca1909.jpg',
    timestamp: dayjs().unix(),
  },
  {
    id: 9,
    description:
      'Glenhill renovation',
    category:[1, 2],
    arLink: 'https://skfb.ly/oINJH',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/reno.1.jpg',
    timestamp: dayjs().unix(),
  },
  {
    id: 10,
    description:
      "Ernst with the dogs in Glenhill Farm's porch",
    category:[1, 3],
    arLink: 'https://skfb.ly/oINJJ',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/dogserb.jpg',
    timestamp: dayjs().unix(),
  },
  {
    id: 11,
    description:
      'Mary playing with dogs',
    category:[1, 2],
    arLink: '',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/marry with dogs.png',
    timestamp: dayjs().unix(),
  },
  {
    id: 12,
    description: 'Sheep grazing next to Turnbull',
    category:[1, 3],
    arLink: 'https://skfb.ly/oINJF',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/OldHouseFarmAnimals.png',
    timestamp: dayjs().unix(),
  },
  {
    id: 13,
    description:
      'Original Schilling house (Later became Glenhill)',
    category:[1, 2],
    arLink: 'https://skfb.ly/oINJI',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/Schilling%20HouseBecameGlenhill.png',
    timestamp: dayjs().unix(),
  },
  {
  id: 14,
    description:
      'Pool next to Glenhill Farmhouse',
    category:[1, 2],
    arLink: 'https://skfb.ly/oIOSO',
    latitude: 42.119422,
    longitude: -79.985721,
    image:
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/Schilling%20HouseBecameGlenhill.png',
    timestamp: dayjs().unix(),
  },
];

// gallery description data
export const DESCRIPTION: IDescription[] = [
  {
    id: 1,
    title: 'Glenhill Farm',
    image_url: [
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/reno2.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/glenhill reno.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/reno.1.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/guarden statue 2.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/guarden statue 1 copy.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/dogserb.jpg',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/bruno and family (2).png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/girl on diving board.png',
    ],
    captions:[
       'Glenhill farmhouse during construction',
       'Glenhill being renovated and expanded',
       'Glenhill being renovated',
       "Girls statue in Glenhill's garden",
       'Girls statue in Glenhill garden',
       "Ernst feeding the dogs on the Glenhill's porch",
       'Bruno laying on the ground with the Behrend family in the garden',
       "Girl on a springboard on Glenhill's pool",
    ],
    description: "The family’s original mansion was on the Hammermill site, which was convenient for managing the plant, but came with the unpleasant smells of papermaking and much sawdust in the air which made its way into the house. Beginning in the late 1920’s the Behrends began buying farms in Harborcreek to build a new home and outbuildings. The Glenhill Farmhouse was meant to be a home for their farmer, and they intended to build a larger one behind it on the hill, but that plan was abandoned. They hired renowned architect R. Brognard Okie of Philadelphia to bring their dream to fruition. Okie had worked on the renovations of Pennsbury Manor, home of William Penn, and the Betsy Ross house and had built new houses for other prominent people. The Behrends enjoyed their first night there at Thanksgiving of 1933. Since the inception of the campus in 1948, it has served as the administration building, but in the early days it was also used as the women’s dorm.",
  },
  {
    id: 2,
    title: 'Turnbull Building',
    image_url: [
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/OldHouseHorseAndBuggy.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/OldHouseFarmAnimals.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/horses infront of turnbull.png',
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/horseerb.jpg',
    ],
    captions: [
      'Horses carrying a buggy',
      'Sheep grazing on the side of Turnbull',
      'Horses pushing a sled during winter',
      'Otto and Ernst riding horses',
  ],
    description: 'What we know as Turnbull Hall now was once the barn for the original Glenhill Farm. No doubt Harriet kept her horses there. On the first day of classes at the newly formed Behrend Center, workers were still mucking the stalls below while the students took classes on the second floor. When beloved history professor Thomas Turnbull, a WWII veteran, died in 1956, the students dedicated their yearbook (Bits of Behrend) to him and requested that Penn State allow the campus to rename the barn Turnbull Hall. For building has had many purposes over the years including offices and classrooms and the library was located there for a while',
  },
  {
    id: 3,
    title: 'Hamermill Factory',
    image_url: [
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/ErnstRBehrend1905HammermillPlant.jpg',

    ],
    captions: [
      'Ernst Behrend riding a horse with the Hammermill factory on the background',
  ],
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
    captions: [ 
      'Mary wearing a wedding dress',
      'Mary playing the harp',
      "Mary making christmas trees on Glenhill's porch",
      'Young Mary as a bride',
      'Mary playing with her dogs during winter on the side of the house',
      'Caption',
      'Portait image of Mary Behrend',
  ],
    description: 'Mary Brownell Behrend, was born into privilege in Providence, RI on December 29, 1879. In 1907 she married Ernst Behrend who she met when she traveled to Erie to visit a finishing school friend who introduced her to the most eligible local bachelors. Her early diaries and scrapbooks hinted at the Renaissance woman she would become. She was interested in domestic pursuits such as gardening and crafts, but she had a sporty side and was the women’s golf champion of Rhode Island in 1902. In her later years she took to her art studio (now the Studio Theatre) for painting lessons from renowned local artist Joseph Plavcan. Many of her paintings hang in her beloved Glenhill Farmhouse. She was deeply involved with its design, and she corresponded sometimes daily with the architect about every detail of the work down to the door hinges. After her husband died in 1940, she moved back to New England. In 1948 she donated Glenhill Farm to Penn State to honor her husband’s love of education and she often visited the campus. A decade later Penn State she received the newly created Penn State Medal. She passed away on July 5, 1976 at age 96.',
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
    captions: [ 
      'Otto and Ernst wearing suits',
      'Ernst and his family in the garden',
      'Ernst as a young shoemaker',
      'Ernst posing with a horse in front of Turnbull',
      'Picture of Ernst sitting on a bench',
      'Moritz and Rebecca Behrend, parents of Ernst and Otto, sitting on a bench',
      'Ernst and his daughter Harriet Behrend ',
      'Caption for an image',
      'Ernst home before Glenhill farmhhouse',
      'Ernst holding a drink',
    ],
    description: 'Ernst Behrend, born in Coeslin, Germany on March 29, 1869, was a man of remarkable drive and precision who left an indelible mark on both his business endeavors and his personal life. He studied at the Dresden and Charlottenburg Polytechnic Institutes and served as a Lieutenant in the Prussian Mounted Artillery. Ernst and his father and brother founded the Hammermill Paper Company in 1898. It eventually became a Forbes 500 Company. The company was known for forward-thinking employee policies, including vacations and pensions. Ernst and his brother, Otto, patented a unique watermarking device in 1902 which was a boon for the company. He was also devoted to the Erie community and he sat on many boards, was president of the Community Chest, and served as a Four Minute Man during World War I, giving rousing short speeches to inspire support for the troops. Ernst and Mary were world travelers, taking many commercial cruises until they took possession of their yacht named Amida in April 1929. Custom-built in Keil, Germany and requiring a staff of 33, it encountered a gale while on its maiden voyage to be delivered to the family in the United States. The crew rescued 10 men whose schooner had capsized. Ernst passed away in Glenhill Farmhouse on September 20, 1940. He received an honorary PhD from Thiel College in 1936 and was posthumously inducted into the Paper Industry International Hall of Fame in 2012.',
  },
  {
    id: 7,
    title: 'Harriet Behrend',
    image_url: [
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
    captions: [ 
      'Harriet with her brother Warren and her mother Mary ',
      'Newspaper clip of her wedding day',
      "Harriet wearing her mother's wedding dress",
      'Harriet (left) and Mary (right) wearing the same wedding dress',
      'Harriet playing with her dog Bruno',
      'Bruno and Harriet laying on the ground',
      'Harriet with her shooting club results',
      'Harriet and all her shooting team members',
      'Portrait picture of Harriet smoking',
      'Harriet as a baby with a sled',
      'Harriet as a baby playing with a sled',
    ],
    description: 'Daughter Harriet Ellen Behrend Sayre Ninow led an adventurous life. Born on January 4, 1911 in Boston, Massachusetts, she attended Spence School and then Vassar College where she, a passionate equestrienne, was involved in horse shows. She was an accomplished markswoman who was the “Woman’s All-Bore Skeet Shooting Champion” of 1941. During that tournament she met widower Caryl Sayre who was raising two young daughters, Calista and Suzanne. They married at Glenhill in 1942 and she bore two sons, Richard and William. They made their home on Long Island where she was such a tireless charity worker that she had a second telephone line in her home dedicated to that purpose. Like her mother and her uncle Otto, she enjoyed golf. She served on the Behrend Council of Fellows and was awarded the Behrend Medallion in 1981. After Caryl’s 1963 death, she married Earl Ninow, a Navy psychiatrist who later served as chief of White House military aides for President Lyndon Johnson. He died in a plane accident on August 13, 1984. Harriet, who was already being treated for cancer at the time of his death, succumbed on December 28, 1986.',
  },
  {
    id: 8,
    title: 'Warren Behrend',
    image_url: [
      'https://varlab.bd.psu.edu/_app/IMMR_BD/edited/ottowarren.jpg',
    ],
    captions: [ 
      'Warren and his father Ernst riding a sled',
    ],
    description: "The elder of the Behrends’ two children was their son Warren Moritz. Born on March 14, 1909, in Rhode Island, he attended Deerfield Academy in Massachusetts. It was from there that he and friend Ned Richardson travelled by train to Washington, DC where they picked up the family car and headed south to meet the family in Charleston, South Carolina for Christmas on the Amida. On December 19, 1929, near Pleasant Hill, North Carolina he swerved to miss a school bus that had cut in front of them. Warren died instantly, but Ned survived. He was remembered at two concurrent funerals. One was held in DC’s National Episcopal Cathedral and the other at Erie’s St. Paul’s Episcopal Cathedral. A stone memorial shaped like a cross was erected at the site of the crash and later moved to Wintergreen Gorge Cemetery near the chapel that holds his remains and that of his family. His heartbroken parents sold the Amida to an Egyptian shipping magnate for a quarter of its original cost. They also built a new pool and outfitted a visiting room in his honor at Deerfield. Behrend Center students dedicated the first campus yearbook, The Cub (1950), to him",
  },
]

export default {
  WELCOME,
  USERS,
  SPONSOR,
  CATEGORIES,
  HISTORY,
  GALLERIES,
  DESCRIPTION,
};
