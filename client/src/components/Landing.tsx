import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {

  const [name, setName] = useState("");

  return (
    <div>

      <input type='text' placeholder='Enter your name here'
        onChange={(e) => setName(e.target.value)}
      />
      <Link to={`/room/?name=${name}`}>join the chat </Link>
    </div>
  )
}

export default Landing;
