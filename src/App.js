import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForms from "./components/FeedbackForms";

function App(){
  const[feedback,setfeedback]=useState(FeedbackData);
  const deleteFeedback =(id)=>{
    if(window.confirm('Are you sure you want to delete?')){
    setfeedback(feedback.filter((item)=> item.id !==id))
  }
}
  return (
    <>
    <Header/>
    <div className="container">
      <FeedbackForms/>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback}
      handleDelete={deleteFeedback}/>
    </div>
    </>
  )
}

export default App;