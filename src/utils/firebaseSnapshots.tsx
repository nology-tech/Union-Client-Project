import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FirebaseError } from "firebase/app";
import { UserCredential } from "firebase/auth";

const eventsCollectionRef = collection(db, "events");
const usersCollectionRef = collection(db, "users");


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

export const getUsers = async () => {
  try {
    const user = await getDocs(usersCollectionRef);
    const filteredUserData = user.docs.map((doc) => {
      const userData = doc.data();
      return {
        ...userData,
      };
    });
    console.log(filteredUserData);

    
    return filteredUserData;
  } catch (err) {
    console.error(err);
  }
};

export const addUser = async (
  userData: UserCredential,
  firstName: string | undefined,
  lastName: string | undefined,
  email: string | null,
  userId: string | undefined | undefined,
  isAdmin: boolean
) => {
  try {
    const userDocRef = doc(db, "users", userData.user.uid);

    await setDoc(userDocRef, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      UUID: userId,
      isAdmin: isAdmin,
      events: [],
    });
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error(error.code);
    }
  }
};
