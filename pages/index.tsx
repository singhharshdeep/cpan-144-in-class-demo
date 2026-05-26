import { useState } from "react";

// function useMyHook() {
//   console.log("Called my hook");
// }
// Invalid
// myHook();
export default function Home() {
  const [counter, setCounter] = useState(21000);
  const [name, setName] = useState("John Doe");
  const [user, setUser] = useState({
    id: 1,
    name: "Jane Doe",
    email: "janedoe@email.com",
    age: 30,
  });

  return (
    <div>
      <p className="text-4xl">Counter value is: {counter}</p>
      <p>User name: {name}</p>
      <button onClick={() => setName("John Ive")}>Update name</button>
      <button
        onClick={() => {
          console.log("Adding 1 to myState");
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
