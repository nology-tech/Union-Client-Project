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

export const getUserEventsIds = async (userId: string) => {
  try {
    const userDocRef = doc(db, "users", userId);

    const data = (await getDoc(userDocRef)) as any;
    const eventsIds =
      data._document.data.value.mapValue.fields.events.arrayValue.values.map(
        (id: { stringValue: string }) => {
          return id.stringValue;
        }
      );
    return eventsIds;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error(error.code);
    }
  }
};

export const getEventsById = async (eventIds: string[]) => {
  try {
    const data = await getDocs(eventsCollectionRef);
    const eventsData = data.docs;
    const filteredEvents = eventIds.map((eventId) => {
      // console.log("eventId =>", eventId);
      return eventsData.find((doc) => doc.id === eventId);
    });
    // console.log("eventsData =>", eventsData);
    // console.log("filteredEvents =>", filteredEvents);
    return filteredEvents;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error(error.code);
    }
  }
};
