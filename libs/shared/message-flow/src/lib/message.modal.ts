export interface Message {
  id: string;
  userId: string;
  message: UserMessageContent | SystemMessageContent;
  date: Date;
}

export interface UserMessageContent {
  content: string;
}

export interface SystemMessageContent {
  type: SystemMessageType;
  content: string;
  options?: string[];
  articles?: Article[];
  faqs?: FAQ[];
  videoUrl?: string;
  imageUrl?: string;
}

export enum SystemMessageType {
  text = 'text',
  multipleChoice = 'multipleChoice',
  singleChoice = 'singleChoice',
  article = 'article',
  FAQ = 'FAQ',
  video = 'video',
  image = 'image',
}

export interface Article {
  title: string;
  content: string;
  imageUrl: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
