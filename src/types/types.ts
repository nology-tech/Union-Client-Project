export type Event = {
  id: string;
  name: string;
  category: string;
  date: Date;
  description: string;
  images: string[];
  capacityMax: number;
  capacityCurrent: number;
};

export type User = {
UUID: string;
email: string;
firstName: string;
lastName: string;
isAdmin: boolean;
events: string[];
};
