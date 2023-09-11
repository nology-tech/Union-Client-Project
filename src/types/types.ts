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
  firstName: string;
  lastName: string;
  email: string;
  UUID: string;
  events: string[];
};
