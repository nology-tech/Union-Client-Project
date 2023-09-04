import "./SnapshotFirebase.scss";
import React, { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";
import db from "../../firebase";

const SnapshotFirebase = () => {
  const [eventsList, setEventsList] = useState([]);

  const eventsCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEventList = async () => {
      try {
        const data = await getDocs(eventsCollectionRef);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
  }, []);
};

// const q = query(collectionRef, where("title", "==", "Event1"));

// const unsub = onSnapshot(
//   collectionRef,
//   (querySnapshot) => {
//     const events = [];
//     querySnapshot.forEach((doc) => {
//       events.push(doc.data());
//     });
//     return () => {
//       unsub();
//     };
//   },
//   []
// );

// useEffect(()=>{
//     const getEvents = async() =>{
//         const querySnapshot = await getDocs(dbRef)
//     }
// })
