import React, { useState } from 'react';
import { db } from '../config/firebase';
import { ref, get } from "firebase/database";

const ReadDataComponent = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);

  const handleInputChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setId(target.value);
  };

  const fetchDataById = async () => {
    if (!id) {
      console.log("Please enter an ID");
      return;
    }

    const dbRef = ref(db, `/courses/${id}`);

    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        console.log("No data available for the provided ID");
        setData(null);
      }
    } catch (error) {
      console.error("Error reading data:", error);
    }
  };

  return (
    <div>
      <input type="text" value={id} onChange={handleInputChange} placeholder="Enter ID" />
      <button onClick={fetchDataById}>Fetch Data</button>
      {data && (
        <div>
          <h3>Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ReadDataComponent;
