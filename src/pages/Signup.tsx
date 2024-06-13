import React, { useState } from 'react';
import { doc, setDoc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from '../config/firebase';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    // Handle the submit action here
    create();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  async function create() {
    // Step 1: Reference to the document where the user count is stored
    const countRef = doc(db, "users", "user-count");

    try {
      // Step 2: Retrieve the current count
      const countDoc = await getDoc(countRef);

      let currentCount = 0;
      if (countDoc.exists()) {
        currentCount = countDoc.data().count;
      } else {
        // Initialize count if it doesn't exist
        await setDoc(countRef, { count: 0 });
      }

      // Increment the count
      currentCount += 1;

      // Update the count in the database
      await updateDoc(countRef, { count: increment(1) });

      // Step 3: Use the incremented count as the document ID
      const userRef = doc(db, "users", `user-${currentCount}`);
      const user = {
        username: username,
        password: password
      };

      // Add the new user to the database
      await setDoc(userRef, user);

      console.log("Document written with ID: ", userRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }


  return (
    <div className="signup">
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Signup;