import { getDocs, collection } from "firebase/firestore";
import db from "../firebase";

const eventsCollectionRef = collection(db, "events");

export const getEventList = async () => {
  try {
    const data = await getDocs(eventsCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData;
  } catch (err) {
    console.error(err);
  }
};
