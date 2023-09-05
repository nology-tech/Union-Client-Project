import { getDocs, collection } from "firebase/firestore";
import db from "../firebase";

const eventsCollectionRef = collection(db, "events");

export const getEvents = async () => {
  try {
    const data = await getDocs(eventsCollectionRef);
    const filteredData = data.docs.map((doc) => {
      const eventData = doc.data();
      const date = eventData.date.toDate();
      return {
        ...eventData,
        id: doc.id,
        date,
      };
    });

    return filteredData;
  } catch (err) {
    console.error(err);
  }
};
