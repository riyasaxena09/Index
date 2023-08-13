import { useState } from "react";

function Contact(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setP]=useState('');
    function Namehandler(e){
        setName(e.target.value);
    }
    function Emailhandler(e){
        setEmail(e.target.value);
    }
    function Phonehandler(e){
        setP(e.target.value);
    }
   async function Save(e){
e.preventDefault();
const obj={
    Name:name,
    Email:email,
    Phone:phone

}
  console.log(obj)
  let response =await fetch('https://contactfore-commerece-default-rtdb.firebaseio.com/contact.json',{
    method:'POST',
    body:JSON.stringify(obj),
    headers:{
'content-type':'application/json'
    }
})
let data=await response.json();
console.log(data);
 
}
    
return(
    <>
    <div>
        <form onSubmit={Save}>
            <div>
            <label>Name</label>
            <input onChange={Namehandler}></input>
            </div>
            <div>
            <label>Email ID</label>
            <input onChange={Emailhandler}></input>
            </div>
            <div>
            <label>Phone No.</label>
            <input onChange={Phonehandler}></input>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
    </>
)
}
export default Contact;
