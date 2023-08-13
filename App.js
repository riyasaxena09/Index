import React, { useState,useEffect,useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Form from './components/Form';

function App() {
  const [movie,setm]=useState([]);
    const [load,setload]=useState(false);
    const [error,setE]=useState(null);
const pro=useCallback(async function(){
  setload(true);

  setE(null);
  try{
     const a=await fetch('https://movie-aab57-default-rtdb.firebaseio.com/movies.json');
     if(!a.ok){
      throw new Error('somehtinng went wrong')
     }
             const b=await a.json();
             const loaded=[];
             for(let key in b){
              loaded.push({
                id:key,
title:b[key].Title,
openingText:b[key].Text,
releasingDate:b[key].Date,
              })
             }
        console.log(b)
          
              setm(loaded);
   
      }
catch(error){
setE(
  error.message)
} 
        
setload(false);     

},[]);
useEffect(()=>{
pro();
},[pro]);
async function addmovieHandler(movie){
  console.log(movie)
  let response =await fetch('https://movie-aab57-default-rtdb.firebaseio.com/movies.json',{
    method:'POST',
    body:JSON.stringify(movie),
    headers:{
'content-type':'application/json'
    }
})
let data=await response.json();
console.log(data);
 
}
  return (
    <React.Fragment>
      <section>
        <Form onAdd={addmovieHandler}>

        </Form>
      </section>
      <section>
        <button onClick={pro}>Fetch Movies</button>
      </section>
      <section>
        {!load && <MoviesList movies={movie} />}
        {load && <p>loading</p>}
        {
    !load && error && <p>{error}</p>
      }
      </section>
    </React.Fragment>
  );
}

export default App;
 
  