import React, { useState, useEffect } from 'react';

export default function App() {

  const [a, change_a] = useState(1);

    useEffect(() => {

      setTimeout(() => { change_a((a) => a + 1); }, 1000);

    if(a>11){

      change_a((a) => 1);

    }

  });

  return ({a});

}