import { Timestamp } from "firebase/firestore";

export type Event = {
  id: string;
  name: string;
  category: string;
  date: Timestamp;
  description: string;
  images: string[];
};
