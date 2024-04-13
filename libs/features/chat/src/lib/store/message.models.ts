
/**
 * Interface for the 'Message' data
 */
export interface MessageEntity {
  id: string | number; // Primary ID
  name: string;
}
export interface MessageResponsePair {
  message: string;
  response: any;
}

export interface SearchItem {
  message?: string;
  response?: any;
  error?: any;
  isResponse: boolean;
  ts: number;
}
