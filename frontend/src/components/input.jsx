import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import axios from "axios";
import { LoadingSpinner } from "./ui/loading";
import ReactMarkdown from 'react-markdown';


export function TextareaWithButton() {
    const [Input , setInput ] = useState('');
    const [Info , setInfo] = useState(''); 
    const [isLoading , setIsLoading] = useState(false);

    const handleInputChange = (e)=>{
        setInput(e.target.value);
    };
// TODO take notes on the how to show a custom loader in the react 
    const handleClick = async () =>{
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/api/v1/user/chat', { prompt : Input}) ;
            console.log(response);
            const resfromGemini = await response.data.response ;
            console.log(resfromGemini);
            setInfo(resfromGemini);
            console.log('Info:', Info);

        } catch (error) {
            console.log(error);
        }
        finally{
            setIsLoading(false);
        }
    }
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Enter your prompt" value={Input} onChange={handleInputChange} />
      <Button onClick={handleClick}>Send message</Button>
      {/* render it on the bascis of the isLoading */}
      {isLoading ?  <LoadingSpinner />  : <div className="leading-loose text-left pl-10"><ReactMarkdown>{Info}</ReactMarkdown></div> }


    </div>
  )
}
