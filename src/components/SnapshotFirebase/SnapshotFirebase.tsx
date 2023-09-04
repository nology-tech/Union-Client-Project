import "./SnapshotFirebase.scss";
import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase";

const SnapshotFirebase = () => {
  const [eventsList, setEventsList] = useState([]);

  const eventsCollectionRef = collection(db, "events");

  useEffect(() => {
    const getEventList = async () => {
      try {
        const data = await getDocs(eventsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log({ filteredData });
      } catch (err) {
        console.error(err);
      }
    };
    getEventList();
  }, []);
};

export default SnapshotFirebase;
