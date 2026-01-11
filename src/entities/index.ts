/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: badges
 * Interface for Badges
 */
export interface Badges {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  
  badgeName?: string;
  
  badgeDescription?: string;
  
  badgeImage?: string;
  
  rarity?: string;
  
  category?: string;
}


/**
 * Collection ID: events
 * Interface for Events
 */
export interface Events {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  
  eventName?: string;
  
  eventDescription?: string;
  
  eventDate?: Date | string;
  
  eventTime?: any;
  
  eventLocation?: string;
  
  eventImage?: string;
  
  eventPrice?: number;
}


/**
 * Collection ID: faqs
 * Interface for FrequentlyAskedQuestions
 */
export interface FrequentlyAskedQuestions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  
  question?: string;
  
  answer?: string;
  
  category?: string;
  
  isFeatured?: boolean;
  
  displayOrder?: number;
}


/**
 * Collection ID: galleryphotos
 * Interface for GalleryPhotos
 */
export interface GalleryPhotos {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  
  photoFile?: string;
  
  title?: string;
  
  description?: string;
  
  uploadDate?: Date | string;
  
  photographer?: string;
  
  eventTag?: string;
}


/**
 * Collection ID: schedule
 * Interface for FestSchedule
 */
export interface FestSchedule {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  
  eventName?: string;
  
  eventDate?: Date | string;
  
  eventTime?: any;
  
  location?: string;
  
  description?: string;
  
  category?: string;
}


/**
 * Collection ID: sponsors
 * Interface for Sponsors
 */
export interface Sponsors {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  
  name?: string;
  
  logo?: string;
  
  websiteUrl?: string;
  
  description?: string;
  
  tier?: string;
}
