import { getDocs, collection, doc, setDoc, getDoc } from "firebase/firestore";
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

export const getUser = async (userId: string) => {
  try {
    const userCollectionRef = doc(db, "users", userId);
    const data = await getDoc(userCollectionRef);
    console.log(data);
    const currentUser = data.data();
    console.log(currentUser);
    return currentUser;
  } catch (error: unknown) {
    console.error(error);
  }
};
