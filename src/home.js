import react from "react";
import { getAuth, signOut } from "firebase/auth";

function Home({ result }) {
  const auth = getAuth();
  return (
    <div>
      <h1>welcome to dashboard!!</h1>
      <br />
      <button className="btn btn-primary" onClick={() => auth.signOut()}>
        logout
      </button>
    </div>
  );
}
export default Home;
