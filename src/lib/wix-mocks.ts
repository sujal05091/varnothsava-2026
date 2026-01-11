// Mock Wix modules for local development

// Dummy data for collections
const dummyData: Record<string, any[]> = {
  events: [
    { _id: '1', eventName: 'Tech Workshop', eventDescription: 'Hands-on technology workshop', eventDate: '2026-03-15', eventTime: '10:00', eventLocation: 'Tech Lab', eventImage: '/images/techworkshop.webp', eventPrice: 299 },
    { _id: '2', eventName: 'Music Concert', eventDescription: 'Live music performance', eventDate: '2026-03-15', eventTime: '18:00', eventLocation: 'Main Stage', eventImage: '/images/music_concert.jpg', eventPrice: 399 },
    { _id: '3', eventName: 'Art Exhibition', eventDescription: 'Contemporary art showcase', eventDate: '2026-03-16', eventTime: '11:00', eventLocation: 'Art Gallery', eventImage: '/images/art_exbi.png', eventPrice: 99 },
    { _id: '4', eventName: 'Dance Competition', eventDescription: 'Inter-college dance battle', eventDate: '2026-03-16', eventTime: '15:00', eventLocation: 'Auditorium', eventImage: '/images/dance.jpg', eventPrice: 199 },
    { _id: '5', eventName: 'Free Fire Tournament', eventDescription: 'E-sports championship', eventDate: '2026-03-17', eventTime: '09:00', eventLocation: 'Gaming Arena', eventImage: '/images/ff1.png', eventPrice: 299 },
    { _id: '6', eventName: 'Fashion Show', eventDescription: 'Student fashion showcase', eventDate: '2026-03-17', eventTime: '19:00', eventLocation: 'Main Stage', eventImage: '/images/fasion.jpeg', eventPrice: 299 },
    { _id: '7', eventName: 'Stand-up Comedy', eventDescription: 'Professional comedians live', eventDate: '2026-03-15', eventTime: '20:00', eventLocation: 'Comedy Club', eventImage: '/images/stand.jpg', eventPrice: 199 },
    { _id: '8', eventName: 'Photography Workshop', eventDescription: 'Learn mobile photography', eventDate: '2026-03-16', eventTime: '09:00', eventLocation: 'Media Lab', eventImage: '/images/photo.avif', eventPrice: 149 },
    { _id: '9', eventName: 'Battle of Bands', eventDescription: 'Rock band competition', eventDate: '2026-03-16', eventTime: '18:00', eventLocation: 'Open Air Stage', eventImage: '/images/bands.jpg', eventPrice: 249 },
    { _id: '10', eventName: 'Poetry Slam', eventDescription: 'Spoken word competition', eventDate: '2026-03-17', eventTime: '14:00', eventLocation: 'Literature Hall', eventImage: '/images/poo.png', eventPrice: 299 },
    { _id: '11', eventName: 'DJ Night', eventDescription: 'Electronic dance music party', eventDate: '2026-03-17', eventTime: '21:00', eventLocation: 'Main Stage', eventImage: '/images/night.jpg', eventPrice: 350 },
    { _id: '12', eventName: 'Treasure Hunt', eventDescription: 'Campus-wide adventure game', eventDate: '2026-03-16', eventTime: '10:00', eventLocation: 'Entire Campus', eventImage: '/images/tre.jpg', eventPrice: 199 }
  ],
  galleryphotos: [
    { _id: '1', photoFile: '/images/cul.jpg', title: 'Previous Event 1', description: 'Amazing moments captured', uploadDate: '2025-12-01', photographer: 'John Doe', eventTag: 'cultural' },
    { _id: '2', photoFile: '/images/line.webp', title: 'Previous Event 2', description: 'Memorable performances', uploadDate: '2025-12-02', photographer: 'Jane Smith', eventTag: 'technical' },
    { _id: '3', photoFile: '/images/spo2.webp', title: 'Previous Event 3', description: 'Community gathering', uploadDate: '2025-12-03', photographer: 'Bob Wilson', eventTag: 'sports' },
    { _id: '4', photoFile: '/images/cul2.jpg', title: 'Previous Event 4', description: 'Festival highlights', uploadDate: '2025-12-04', photographer: 'Alice Brown', eventTag: 'cultural' },
    { _id: '5', photoFile: '/images/robo.jpg', title: 'Previous Event 5', description: 'Student activities', uploadDate: '2025-12-05', photographer: 'Charlie Davis', eventTag: 'technical' },
    { _id: '6', photoFile: '/images/cri.webp', title: 'Previous Event 6', description: 'Campus celebrations', uploadDate: '2025-12-06', photographer: 'Diana Moore', eventTag: 'sports' },
    { _id: '7', photoFile: '/images/dan.png', title: 'Dance Performance', description: 'Energetic dance showcase', uploadDate: '2025-12-07', photographer: 'Eva Martinez', eventTag: 'cultural' },
    { _id: '8', photoFile: '/images/tec.jpg', title: 'Tech Exhibition', description: 'Innovation on display', uploadDate: '2025-12-08', photographer: 'Frank Johnson', eventTag: 'technical' },
    { _id: '9', photoFile: '/images/sing.jpg', title: 'Music Festival', description: 'Live band performances', uploadDate: '2025-12-09', photographer: 'Grace Lee', eventTag: 'cultural' },
    { _id: '10', photoFile: '/images/gam.jpg', title: 'Gaming Arena', description: 'E-sports action shots', uploadDate: '2025-12-10', photographer: 'Henry Chen', eventTag: 'technical' },
    { _id: '11', photoFile: '/images/spo1.jpg', title: 'Sports Day', description: 'Athletic competitions', uploadDate: '2025-12-11', photographer: 'Iris Wang', eventTag: 'sports' },
    { _id: '12', photoFile: '/images/art.webp', title: 'Art Gallery', description: 'Creative expressions', uploadDate: '2025-12-12', photographer: 'Jack Robinson', eventTag: 'cultural' }
  ],
  schedule: [
    { _id: '1', eventName: 'Opening Ceremony', description: 'Grand opening with chief guest', eventDate: '2026-03-15', eventTime: '09:00 AM - 10:00 AM', location: 'Main Auditorium', category: 'Ceremony' },
    { _id: '2', eventName: 'Tech Workshop', description: 'AI & Machine Learning basics', eventDate: '2026-03-15', eventTime: '10:00 AM - 01:00 PM', location: 'Tech Lab', category: 'Workshop' },
    { _id: '3', eventName: 'Lunch Break', description: 'Networking and refreshments', eventDate: '2026-03-15', eventTime: '01:00 PM - 02:00 PM', location: 'Food Court', category: 'Break' },
    { _id: '4', eventName: 'Dance Auditions', description: 'Preliminary rounds', eventDate: '2026-03-15', eventTime: '02:00 PM - 05:00 PM', location: 'Dance Studio', category: 'Competition' },
    { _id: '5', eventName: 'Music Concert', description: 'Live band performance', eventDate: '2026-03-15', eventTime: '06:00 PM - 09:00 PM', location: 'Main Stage', category: 'Music' },
    { _id: '6', eventName: 'Day 2 Opening', description: 'Welcome address', eventDate: '2026-03-16', eventTime: '09:00 AM - 10:00 AM', location: 'Main Auditorium', category: 'Ceremony' },
    { _id: '7', eventName: 'Art Exhibition', description: 'Student artwork display', eventDate: '2026-03-16', eventTime: '10:00 AM - 06:00 PM', location: 'Art Gallery', category: 'Art' },
    { _id: '8', eventName: 'Photography Workshop', description: 'Mobile photography techniques', eventDate: '2026-03-16', eventTime: '02:00 PM - 05:00 PM', location: 'Media Lab', category: 'Workshop' },
    { _id: '9', eventName: 'Fashion Show', description: 'Student designer showcase', eventDate: '2026-03-16', eventTime: '07:00 PM - 09:00 PM', location: 'Main Stage', category: 'Dance' },
    { _id: '10', eventName: 'Gaming Tournament Finals', description: 'E-sports championship', eventDate: '2026-03-17', eventTime: '09:00 AM - 05:00 PM', location: 'Gaming Arena', category: 'Competition' },
    { _id: '11', eventName: 'Cultural Performances', description: 'Traditional and modern fusion', eventDate: '2026-03-17', eventTime: '03:00 PM - 06:00 PM', location: 'Open Air Theatre', category: 'Music' },
    { _id: '12', eventName: 'Prize Distribution', description: 'Award ceremony for winners', eventDate: '2026-03-17', eventTime: '07:00 PM - 08:00 PM', location: 'Main Auditorium', category: 'Ceremony' },
    { _id: '13', eventName: 'Closing Ceremony', description: 'Valedictory and celebration', eventDate: '2026-03-17', eventTime: '08:00 PM - 10:00 PM', location: 'Main Auditorium', category: 'Ceremony' }
  ],
  faqs: [
    { _id: '1', question: 'When is Varnothsava 2K26?', answer: 'Varnothsava 2K26 will be held from March 15-17, 2026 at SMVITM Campus.', category: 'general', isFeatured: true, displayOrder: 1 },
    { _id: '2', question: 'How do I register for events?', answer: 'You can register online through our website or on-campus during the festival days.', category: 'registration', isFeatured: true, displayOrder: 2 },
    { _id: '3', question: 'What is the entry fee?', answer: 'Entry to the campus is free. Individual events have separate registration fees.', category: 'payment', isFeatured: true, displayOrder: 3 },
    { _id: '4', question: 'Are accommodations available?', answer: 'Yes, limited accommodations are available. Contact us early for booking.', category: 'accommodation', isFeatured: false, displayOrder: 4 },
    { _id: '5', question: 'Can I participate in multiple events?', answer: 'Yes, you can participate in multiple events if the schedules don\'t clash.', category: 'registration', isFeatured: false, displayOrder: 5 },
    { _id: '6', question: 'Is food available on campus?', answer: 'Yes, multiple food stalls and canteens will be operational throughout the festival.', category: 'facilities', isFeatured: false, displayOrder: 6 }
  ],
  sponsors: [
    { _id: '1', name: 'Google India', logo: '/images/google.png', websiteUrl: 'https://google.com', tier: 'Platinum', description: 'Leading technology company' },
    { _id: '2', name: 'Tata Group', logo: '/images/tata.jpg', websiteUrl: 'https://tata.com', tier: 'Gold', description: 'Innovation and research partner' },
    { _id: '3', name: 'Microsoft', logo: '/images/micro.jpg', websiteUrl: 'https://microsoft.com', tier: 'Gold', description: 'Creative design solutions' },
    { _id: '4', name: 'T-Series', logo: '/images/tse.png', websiteUrl: 'https://tseries.com', tier: 'Silver', description: 'Music and entertainment' },
    { _id: '5', name: 'Swiggy', logo: '/images/swig.png', websiteUrl: 'https://swiggy.com', tier: 'Silver', description: 'Food and beverage partner' },
    { _id: '6', name: 'Nvidia', logo: '/images/nvidia.jpg', websiteUrl: 'https://nvidia.com', tier: 'Bronze', description: 'Official merchandise partner' }
  ],
  badges: [
    { _id: '1', badgeName: 'Early Bird', badgeDescription: 'Registered in the first week', badgeImage: '/images/bird.webp', rarity: 'common', category: 'registration' },
    { _id: '2', badgeName: 'Event Champion', badgeDescription: 'Won first place in any event', badgeImage: '/images/champ.jpg', rarity: 'rare', category: 'achievement' },
    { _id: '3', badgeName: 'Social Butterfly', badgeDescription: 'Attended 5+ events', badgeImage: '/images/but.jpg', rarity: 'common', category: 'participation' },
    { _id: '4', badgeName: 'Festival Legend', badgeDescription: 'Participated all 3 days', badgeImage: '/images/fest.jpg', rarity: 'epic', category: 'participation' }
  ]
};

export const items = {
  query: (collectionId: string) => ({
    find: async () => ({ 
      items: dummyData[collectionId] || [], 
      totalCount: (dummyData[collectionId] || []).length 
    }),
    eq: function(field: string, value: any) { return this; },
    limit: function(limit: number) { return this; },
    include: function(...fields: string[]) { return this; },
  }),
  insert: async (collectionId: string, data: any) => ({ _id: 'mock-id', ...data }),
  update: async (collectionId: string, data: any) => ({ _id: data._id || 'mock-id', ...data }),
  remove: async (collectionId: string, itemId: string) => ({ _id: itemId }),
  insertReference: async (collectionId: string, propertyName: string, itemId: string, refIds: string[]) => ({}),
  WixDataResult: {} as any
};

export const members = {
  getCurrentMember: async (options?: any) => null
};

export const authentication = {
  promptLogin: async () => ({}),
  logout: async () => ({})
};

export const getPlaceholder = (fittingType: string, data: any, options: any) => ({
  uri: data?.src || '',
  css: { img: {} },
  attr: {}
});

export const sdk = {
  img: true, // Flag to indicate img is available
  getScaleToFitImageURL: (id: string, origWidth: number, origHeight: number, targetWidth: number, targetHeight: number, options?: any) => {
    // Return the original image URL or a placeholder
    return id || 'https://via.placeholder.com/800x600?text=Image';
  },
  getScaleToFillImageURL: (id: string, origWidth: number, origHeight: number, targetWidth: number, targetHeight: number, options?: any) => {
    // Return the original image URL or a placeholder
    return id || 'https://via.placeholder.com/800x600?text=Image';
  }
};

export const STATIC_MEDIA_URL = "https://static.wixstatic.com/media/";

// SEO mocks
export const SEO = {
  Tags: ({ seoTagsServiceConfig }: any) => null
};

export const loadSEOTagsServiceConfig = async (config: any) => ({
  title: 'Varnothsava 2K26',
  description: 'Welcome to Varnothsava 2K26',
  ...config
});

export type FittingType = "fill" | "fit" | "cover";
export type ImageTransformOptions = Record<string, any>;
