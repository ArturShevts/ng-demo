export interface RootQueryResponse {
  fulfillmentText: string;
  knowledgeAnswers: KnowledgeAnswer[];
  intent: string;
  confidence: number;
  parameters: Parameters;
  data: Data;
  meta: Meta;
}

export interface KnowledgeAnswer {
  id?: string;
  content?: string;
  score?: number;
  searchTerm?: string;
  sourceUrl?: string;
  sourceType?: string;
  productCategory?: string;
  lob?: string;
  articleTitle?: string;
  articleId?: number;
  highlights?: Highlights;
}

export interface Highlights {
  _content: string[];
}

export interface Parameters {
  SomeParameters: SomeParameters;
}

export interface SomeParameters {
  value: Value;
}

export interface Value {
  interpretedValue: string;
  originalValue: string;
}

export interface Data {
  insight: Insight;
  snippet: Snippet;
  relatedSuggestions: RelatedSuggestion[];
  searchFollowUp: SearchFollowUp[];
}

export interface Insight {
  options: string[];
  richText?: string[][][];
  offer: Offer;
  recommendedActions: RecommendedAction[];
}

export interface RichText {
  Name: Name;
  Email: Email;
  'Phone Number': PhoneNumber;
}
export interface Name {
  value: string;
  highlight: boolean;
}

export interface Email {
  value: string;
  highlight: boolean;
}

export interface PhoneNumber {
  value: string;
  highlight: boolean;
}

export interface Offer {
  type?: string;
  text?: string;
  actions?: string[];
}

export interface RecommendedAction {
  type?: string;
  text?: string;
  actions?: string[];
}

export interface Snippet {
  text?: string;
  title?: string;
}

export interface RelatedSuggestion {
  title?: string;
  action?: { type?: string; text?: string };
}

export interface Action {
  type?: string;
  text?: string;
}

export interface SearchFollowUp {
  documentId: string;
  content: string;
  location: string;
}

export interface Meta {
  type: 'info' | 'verification' | 'confirmation' | 'fallback';
}
