import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";



function FeedbackForms() {

  const[text,setText] = useState('');
  const[rating,setRating] = useState('');
  const[btnDisabled,setBtnDisabled] = useState(true);
  const[message,setMessage] = useState('');

  const handeleTextChange = (e)=>{
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length <=10){
      setBtnDisabled(true)
      setMessage('Text must be at lest 10 characters');
    }else{
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  return <Card>
    <form >
      <h2>How would you rate your service with us?</h2>
      <div className="input-group">
        <input onChange={handeleTextChange}type="text" placeholder="Write a review" value={text}/>
        <Button type="submit" isDisabled={btnDisabled}>Send</Button>
      </div>
      {message && <div className="message">{message}</div>}
    </form>
  </Card>;
}

export default FeedbackForms;
