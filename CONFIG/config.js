/*
  SHIVA RRAO WEBSITE CONFIGURATION
  Change the values in this file to update your artist profile, bio, social links,
  categories (with unlimited photos & videos per category), gallery, services and booking details.
*/
const SITE_CONFIG = {
  // BRAND DETAILS
  name: 'SHIVA RRAO',
  role: 'LIVE SINGER',
  tagline: 'MY VOICE MY IDENTITY',
  logoText: 'SR',

  // ARTIST DETAILS
  artist: {
    location: 'Surat, Gujarat, India',
    availability: 'AVAILABLE FOR BOOKINGS · INDIA & WORLDWIDE',
    heroTitle: 'Every song.',
    heroTitleAccent: 'A feeling.',
    heroLead: 'Live music that turns your moments into memories, PERFORMANCE STYLE',
    heroDescription: 'Live singing, acoustic guitar unplugged and soulful musical entertainment for celebrations, intimate gatherings and grand stages. Guitar-Based Acoustic Performance, Bollywood Romantic Songs, Retro & Evergreen Hits, Soulful Unplugged Music, SUFI, Audience Interaction & Celebration Song.',
    aboutHeading: 'Not just a voice.',
    aboutHeadingAccent: "It's an experience.",
    biography: 'Singer SHIVA RRAO is a live performer specializing in Bollywood live singing, romantic acoustic guitar unplugged, weddings/receptions, corporate events, private parties, birthdays, anniversaries, family functions, garba, school/college functions, dayro and orchestra/special events. Has delivered over 500+ live performances in Surat/Gujarat and globally (USA, UK, Singapore). With a passion for music and live stage performances, Solo, 2 piece, 3 piece, live band he brings the perfect musical atmosphere to every celebration. From intimate private celebrations to energetic crowd shows, my aim is to create moments people remember..',
    specialties: ['Bollywood & Romantic', 'Acoustic Guitar Unplugged', 'Audience Engagement', 'Live Stage Experience'],
    showCount: '500+',
    showCountLabel: 'LIVE SHOWS',
    reach: 'All India',
    reachLabel: 'INDIA & WORLDWIDE',
    showFormats: 'Booking Events',
    showFormatsLabel: 'SOLO / 2 PIECE / 3 PIECE / BAND',
    photo: 'ASSETS/PHOTOS/LIVE SHOW.png',
    aboutPhoto: 'ASSETS/PHOTOS/artist-about.jpg',
    photoCaption: 'ON STAGE / OFF SCRIPT',
    verticalText: 'SINGER · PERFORMER · EVENT MANAGER'
  },

  // WORLDWIDE SHOW LOCATIONS
  worldwide: {
    heading: 'WORLDWIDE LIVE SHOWS',
    locations: [
      { flag: '', country: 'UNITED STATES', name: 'USA', detail: 'Live performances' },
      { flag: '', country: 'UNITED KINGDOM', name: 'UK', detail: 'Live performances' },
      { flag: '', country: 'SINGAPORE', name: 'Singapore', detail: 'Live performances' }
    ],
    performanceCount: '500+',
    performanceLabel: 'LIVE SHOWS'
  },

  // PERFORMANCE CATEGORIES — ADD UNLIMITED VIDEOS IN EACH CATEGORY (VIDEOS ONLY)
  categories: [
    {
      id: 'private-events',
      title: 'PRIVATE EVENTS',
      subtitle: 'PERSONAL CELEBRATIONS',
      description: 'Make birthdays, anniversaries, weddings and special gatherings unforgettable with live music.',
      cover: 'ASSETS/PHOTOS/PRIVATE_EVENTS/cover.jpg',
      videos: [
        // Add unlimited videos for PRIVATE EVENTS here:
        { title: 'Private Event Video 1', url: 'ASSETS/VIDEOS/PRIVATE_EVENTS/PRIVATE.mp4' },
        { title: 'Private Event Video 1', url: 'ASSETS/VIDEOS/PRIVATE_EVENTS/BIRTHDAY PARTY.mp4' }
      ]
    },
    {
      id: 'cafes-crowd',
      title: 'CAFES & CROWD SHOWS',
      subtitle: 'LIVE • CONNECT • SING ALONG',
      description: 'Acoustic evenings, cafe sessions and interactive performances that bring the crowd together.',
      cover: 'ASSETS/PHOTOS/CAFES_CROWD_SHOWS/cover.jpg',
      videos: [
        // Add unlimited videos for CAFES & CROWD SHOWS here:
        { title: 'Cafe Crowd Video 1', url: 'ASSETS/VIDEOS/CAFES_CROWD_SHOWS/CAFE LIVE 1.mp4' },
        { title: 'Cafe Crowd Video 1', url: 'ASSETS/VIDEOS/CAFES_CROWD_SHOWS/CAFE LIVE 2.mp4' },
        { title: 'Cafe Crowd Video 1', url: 'ASSETS/VIDEOS/CAFES_CROWD_SHOWS/CAFE LIVE.mp4' }
      ]
    },
    {
      id: 'bhajan-devotional',
      title: 'BHAJAN & DEVOTIONAL',
      subtitle: 'SOULFUL DEVOTIONAL MUSIC',
      description: 'Devotional songs, bhajans and spiritual musical moments for satsang and religious occasions.',
      cover: 'ASSETS/PHOTOS/BHAJAN_DEVOTIONAL/cover.jpg',
      videos: [
        // Add unlimited videos for BHAJAN & DEVOTIONAL here:
        { title: 'Bhajan Video 1', url: 'ASSETS/VIDEOS/BHAJAN_DEVOTIONAL/video-01.mp4' }
      ]
    },
    {
      id: 'college-events',
      title: 'COLLEGE EVENTS',
      subtitle: 'CAMPUS • ENERGY • MUSIC',
      description: 'High-energy Bollywood and interactive live singing for college festivals and youth events.',
      cover: 'ASSETS/PHOTOS/COLLEGE_EVENTS/cover.jpg',
      videos: [
        // Add unlimited videos for COLLEGE EVENTS here:
        { title: 'College Event Video 1', url: 'ASSETS/VIDEOS/COLLEGE_EVENTS/video-01.mp4' }
      ]
    },
    {
      id: 'guitar-unplugged',
      title: 'GUITAR UNPLUGGED',
      subtitle: 'STRIPPED BACK • FULL OF FEELING',
      description: 'Intimate acoustic guitar performances with romantic, retro and contemporary Bollywood favourites.',
      cover: 'ASSETS/PHOTOS/GUITAR_UNPLUGGED/cover.jpg',
      videos: [
        // Add unlimited videos for GUITAR UNPLUGGED here:
        { title: 'Guitar Unplugged Video 1', url: 'ASSETS/VIDEOS/GUITAR_UNPLUGGED/GET TOGETHER LIVE.mp4' },
        { title: 'Guitar Unplugged Video 1', url: 'ASSETS/VIDEOS/GUITAR_UNPLUGGED/GET TOGETHER SHOW.mp4' },
        { title: 'Guitar Unplugged Video 1', url: 'ASSETS/VIDEOS/GUITAR_UNPLUGGED/SCHOOL INAUGRATION.mp4' }
      ]
    },
    {
      id: 'stage-shows',
      title: 'LIVE STAGE SHOWS',
      subtitle: 'BIG STAGE • BIG MOMENTS',
      description: 'Professional stage performances for corporate events, festivals, weddings and large audiences.',
      cover: 'ASSETS/PHOTOS/LIVE_STAGE_SHOWS/cover.jpg',
      videos: [
        // Add unlimited videos for LIVE STAGE SHOWS here:
        { title: 'Live Stage Video 1', url: 'ASSETS/VIDEOS/LIVE_STAGE_SHOWS/PRE- DIWALI.mp4' },
        { title: 'Live Stage Video 1', url: 'ASSETS/VIDEOS/LIVE_STAGE_SHOWS/PRE DIWALI.mp4' },
        { title: 'Live Stage Video 1', url: 'ASSETS/VIDEOS/LIVE_STAGE_SHOWS/PRE DIWALI LIVE.mp4' }
      ]
    }
  ],

  // GALLERY (MOMENTS IN MUSIC) — ONLY PHOTOS (UNLIMITED PHOTOS)
  gallery: {
    heading: 'MOMENTS IN MUSIC GALLERY',
    description: 'A collection of live performances, backstage memories and musical moments.',
    items: [
      { type: 'image', title: 'Gallery Photo 1', url: 'ASSETS/PHOTOS/GALLERY/CAFE LIVE.jpeg' },
      { type: 'image', title: 'Gallery Photo 2', url: 'ASSETS/PHOTOS/GALLERY/PRE DIWALI 1.jpg' },
      { type: 'image', title: 'Gallery Photo 3', url: 'ASSETS/PHOTOS/GALLERY/PRE DIWALI 2.jpg' },
      { type: 'image', title: 'Gallery Photo 4', url: 'ASSETS/PHOTOS/GALLERY/PRE DIWALI LIVE 1.jpg' },
      { type: 'image', title: 'Gallery Photo 1', url: 'ASSETS/PHOTOS/GALLERY/PRE DIWALI LIVE.jpg' },
      { type: 'image', title: 'Gallery Photo 2', url: 'ASSETS/PHOTOS/GALLERY/PRE DIWALI SHOW.jpg' },
      { type: 'image', title: 'Gallery Photo 3', url: 'ASSETS/PHOTOS/GALLERY/PRE DIWALI.jpg' },
      { type: 'image', title: 'Gallery Photo 4', url: 'ASSETS/PHOTOS/GALLERY/STAGE.jpg' }
    ]
  },

  // CONTACT & SOCIAL LINKS
  whatsapp: '919737479477',
  email: '',
  instagram: 'https://www.instagram.com/singersshiva/',
  facebook: 'https://www.facebook.com/share/19t4eLquuM/',

  // SERVICES
  services: [
    ['♬', 'Acoustic Guitar Unplugged', 'Intimate acoustic performances.'],
    ['♫', 'Bollywood Live Singing', 'Popular hits and evergreen melodies.'],
    ['✦', 'Private Parties', 'Music for personal celebrations.'],
    ['♥', 'Wedding Functions & Receptions', 'Memorable entertainment for your big day.'],
    ['▣', 'Corporate Events', 'Professional entertainment for business events.'],
    ['✧', 'Birthday Celebrations', 'Make the celebration sing.'],
    ['∞', 'Anniversary Celebrations', 'Romantic live music for special milestones.'],
    ['⌂', 'Family Functions', 'Music for every generation.'],
    ['❋', 'Garba Events', 'Festive Gujarati music and energy.'],
    ['✸', 'School & College Functions', 'Engaging performances for students.'],
    ['◉', 'Orchestra & Special Events', 'Live musical entertainment.'],
    ['☼', 'Baby Shower', 'A soulful touch for a special occasion.'],
    ['♧', 'Dayro', 'Gujarati folk and cultural entertainment.']
  ],

  // INSTAGRAM REELS & CLIPS — ADD UNLIMITED REELS HERE (EACH WITH ITS OWN COVER / THUMBNAIL)
  // Tip: Put your reel cover image in ASSETS/PHOTOS/REELS/ (e.g. reel-01.jpg) OR paste an image URL in `cover`!
  // Instagram's /embed/ iframe often blocks external/local loading or shows blank, so using `cover` guarantees a crisp visible cover/thumbnail!
  videos: [
    {
      title: 'Romantic Live Performance',
      category: 'LIVE SHOW',
      url: 'https://www.instagram.com/reel/DfZJLSdIMq-/',
      cover: 'ASSETS/PHOTOS/REELS/reel-01.jpg',
      embed: 'https://www.instagram.com/reel/DfZJLSdIMq-/embed/',
      preview: true
    },
    {
      title: 'Acoustic / Unplugged Session',
      category: 'GUITAR UNPLUGGED',
      url: 'https://www.instagram.com/reel/DfRLhw2NduC/',
      cover: 'ASSETS/PHOTOS/REELS/reel-02.jpg',
      embed: 'https://www.instagram.com/reel/DfRLhw2NduC/embed/',
      preview: true
    },
    {
      title: 'More Performances',
      category: 'INSTAGRAM',
      url: 'https://www.instagram.com/singersshiva/',
      cover: 'ASSETS/PHOTOS/REELS/reel-03.jpg',
      preview: false
    }
  ],

  // BOOKING FORM EVENT OPTIONS
  eventTypes: [
    'Acoustic Guitar Unplugged', 'Bollywood Live Singing', 'Private Parties',
    'Wedding Functions & Receptions', 'Corporate Events', 'Birthday Celebrations',
    'Anniversary Celebrations', 'Family Functions', 'Garba Events',
    'School & College Functions', 'Orchestra & Special Events', 'Baby Shower', 'Dayro'
  ],

  // FOOTER DETAILS
  footer: {
    line: "LIVE MUSIC · BEAUTIFUL MEMORIES · LET'S MAKE YOUR EVENTS MEMORABLE.",
    copyright: '© SHIVA RRAO. ALL RIGHTS RESERVED.'
  }
};
window.SITE_CONFIG = SITE_CONFIG;
