import Map from "./Map";
import { useCallback, useEffect, useState } from 'react'
function List(){
    const [movie,setm]=useState([]);
    const [load,setload]=useState(false);
    const [error,setE]=useState(null);

   
const pro=useCallback(async function(){
    setload(true);
  
    setE(null);
    try{
       const a=await fetch('https://swapi.dev/api/films/');
       if(!a.ok){
        throw new Error('somehtinng went wrong')
       }
               const b=await a.json();
          
             const trans=
                setm(b.results);
     
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
    return(
        <>
     <button onClick={pro}>SHow movies</button>
  {!load && <Map item={movie}></Map>}
  {load && <p>loading</p>}
      {
    !load && Error && <p>{error}</p>
      }
        </>
    )
    }
export default List;