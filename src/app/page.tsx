'use client';

import { useState } from "react";
import PageTitle from "./components/PageTitle";
import { useCounter } from "./context/GlobalContext";

export default function Home() {
  // create a state var to track # of button clicks, defaults to zero
  const [ count, setCount ] = useState<number>(0);

  //global counter var & increment method from context
  const { counter, increment } = useCounter();

  const handleClick = () => {
    // increment the count var by 1 each time 
    setCount(count + 1);
    // call the global increment method to add 1 to the global counter var
    increment();
  }

  // every React component must have 1 return to send the JSX to the DOM
  return (
    <main>
      <PageTitle title="Home"/>
      <h1>COMP2112 Class Site</h1>
      <p>This site is built with Next.js</p>
      <section>
        <button onClick={handleClick}>Click Me</button>
        <p>You have clicked the button {count} times.</p>
      </section>
    </main>
  );  
}
