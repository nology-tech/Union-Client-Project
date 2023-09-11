import { getDocs, getDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FirebaseError } from "firebase/app";
import { UserCredential } from "firebase/auth";

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

export const addUser = async (
  userData: UserCredential,
  firstName: string | undefined,
  lastName: string | undefined,
  email: string | null,
  userId: string | undefined
) => {
  try {
    const userDocRef = doc(db, "users", userData.user.uid);

    await setDoc(userDocRef, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      UUID: userId,
      events: [],
    });
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error(error.code);
    }
  }
};

export const getEventsForUser = async (userId: string) => {
  try {
    // Fetch the user's document to get the event IDs
    const userDoc = await getDoc(
      doc(db, "users", userId)
    );
    if (!userDoc.exists()) {
      console.error("User not found");
      return [];
    }

    const userData = userDoc.data();
    const eventIds = userData.events;

    // Fetch the event documents based on event IDs
    const eventPromises = eventIds.map(async (eventId: string) => {
      const eventDoc = await getDoc(doc(db, "events", eventId));
      if (eventDoc.exists()) {
        const eventData = eventDoc.data();
        const date = eventData.date.toDate();
        return {
          ...eventData,
          id: eventDoc.id,
          date,
        };
      } else {
        console.error(`Event with ID ${eventId} not found`);
        return null;
      }
    });

    const eventsData = await Promise.all(eventPromises);
    // Filter out any null values (events not found)
    const filteredEventsData = eventsData.filter(
      (eventData) => eventData !== null
    );
    return filteredEventsData;
  } catch (err) {
    console.error("Error fetching events:", err);
    return [];}
  }
export const getUser = async (userId: string) => {
  try {
    const userCollectionRef = doc(db, "users", userId);
    const data = await getDoc(userCollectionRef);
    const currentUser = data.data();
    return currentUser;
  } catch (error: unknown) {
    console.error(error);
  }
};
