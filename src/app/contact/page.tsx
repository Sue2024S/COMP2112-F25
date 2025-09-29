'use client';

import { useState } from "react";
import PageTitle from "../components/PageTitle";

export default function Contact() {
  //2. const to set state
  const [ name, setName ] = useState<string>("");

  //5. LAB 2: add state variable for message and confirmation
  const [ message, setMessage ] = useState<string>("");
  const [ confirmation, setConfirmation ] = useState<string>("");
  
  //3. watch name input and update state variable as input value changes
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  //6. LAB 2: add handler for message input
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }

  //4. show confirmation when button clicked
  const handleSubmit = () => {
    setConfirmation(`Your name: ${name} - Your message: ${message}`);
  }

//1. include return
  return(  
    <main>
        <PageTitle title="Contact"/>
        <h1>Contact Us</h1>
        <p>Contact Us at 705.000.000 </p>
        <input type="text" placeholder="Your Name" value={name} onChange={handleNameChange}/>
        <p>Your name is: {name}</p>
        
        <input type="text" placeholder="Your Message" value={message} onChange={handleMessageChange}/>
        <button onClick={handleSubmit}> Submit </button>
        <p>{confirmation}</p>
    </main>
  );
}  