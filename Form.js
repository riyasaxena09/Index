import { useState } from "react";

function Form(){
    const [title,settitle]=useState('');
    const [Text,settext]=useState('');
    const [Date,setDate]=useState('');
    function submithandler(e){
        e.preventDefault();
    const obj={
        Title:title,
        Text:Text,
        Date:Date,
    }
    console.log(obj);
}
   
    function titlehandler(e){
settitle(e.target.value);
    }
    function Texthandler(e){
        settext(e.target.value);  
    }
    function Datehandler(e){
        setDate(e.target.value); 
    }
    return(
<>
<form onSubmit={submithandler}>
<label>Title</label>
<input onChange={titlehandler}></input>
<label>Opening Text</label>
<input onChange={Texthandler}></input>
<label>Release Date</label>
<input onChange={Datehandler}></input>
<button >Add Movie</button>
</form>
</>
    )
}
export default Form;