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
  //   const collectionRef = collection(db, "events");

  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    const getEventList = async () => {};
    // read the data
    // set the Event List

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
  }, []);
};
