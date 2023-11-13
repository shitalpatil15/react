import UserContext from '../utils/UserContext';
import { useContext, useState } from 'react';

const Contact = () => {
    const result = useContext(UserContext);

const [longgestNonRepeatingChars , setLonggestNonRepeatingChars ] = useState('ABCDDDEFGHI');
    const findTheLonggestNonRepeatingChars =() => {
  const arr = [];

  
  longgestNonRepeatingChars.split('').forEach((e, index)=>{
    
    console.log(longgestNonRepeatingChars.indexOf(e), index)
    if(longgestNonRepeatingChars.indexOf(e) !== index){
     arr.length = 0
       arr.push(e)
    } else {
      
       arr.push(e)
    }
    
  })
  setLonggestNonRepeatingChars(arr);

}
    return (
        <>
            <h1>Contact US</h1>
            <div className="bg-red-50 rounded shadow py-10 pb-60 pl-4">
                Mindspace Airoli, Navi Mumbai.
            </div>
            <p>Logged In User: {result.loggedInUser}</p>

            <form className="bg-black-100">
                Name <input type="text" placeholder='name' className='rounded-md border-2' />
                Mobile Number <input type="text" placeholder='Number' className='rounded-md border-2' />
                <button className="rounded-md border-solid shadow-lg mx-3 px-3 bg-blue-200">Submit</button>
            </form>
            <div>
                <input className='rounded-md border-2'  value={longgestNonRepeatingChars} onChange={(e)=>{setLonggestNonRepeatingChars(e.target.value)}}/>
                <button onClick={()=>{findTheLonggestNonRepeatingChars()}} className="rounded-md border-solid shadow-lg mx-3 px-3 bg-blue-200"> Check longgest non repeating chars</button>

                <p>{longgestNonRepeatingChars}</p>
            </div>
        </>
    )
}

export default Contact;