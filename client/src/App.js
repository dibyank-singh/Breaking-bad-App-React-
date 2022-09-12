import { useState } from 'react';
import Carts from './Components/Carts/Carts';
import Header from './Components/Header';


function App() {
  const [finaldata , setFinaldata]=useState('')

  return (
    <>
    <Header 
    setFinaldata={setFinaldata}
    />
    <Carts
    finaldata={finaldata}
    />

    </>
  );
}

export default App;
