import { getDocs, collection } from "firebase/firestore";
import db from "../firebase";
import { Event } from "../types/types";

const eventsCollectionRef = collection(db, "events");

export const getEvents = async () => {
  try {
    const data = await getDocs(eventsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...(doc.data() as Event),
      id: doc.id,
    }));
    return filteredData;
  } catch (err) {
    console.error(err);
  }
};
