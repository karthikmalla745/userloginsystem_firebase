import React, { useEffect, useState } from "react";
import { app } from "../src/firebase";
import Home from "../src/home";
import UserAuth from "../src/userAuth";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const auth = getAuth();
  const [result, setResult] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setResult({
          uid: user?.uid,
          email: user?.email
        });
      } else {
        setResult(null);
      }
    });
  }, []);
  return (
    <div>
      <center>{result ? <Home result={result} /> : <UserAuth />}</center>
    </div>
  );
}
export default App;
