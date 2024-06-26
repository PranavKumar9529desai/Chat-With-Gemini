import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import axios from "axios";
import { LoadingSpinner } from "./ui/loading";
import ReactMarkdown from 'react-markdown';
import { TypographyH1 } from "./ui/typography";

// TODO clear the input after new messge
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
            // import.meta.env.VITE_SOME_KEY
            // http://localhost:3000/api/v1/user/chat'
            const response = await axios.post(import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api/v1/user/chat" , { prompt : Input}) ;
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
  return (<>
    < TypographyH1 />
        <div className="grid w-full gap-2 mt-10 ">
            <Textarea placeholder="Enter your prompt" value={Input}  onChange=               {handleInputChange} />
            <Button className= "w-full justify-self-center"onClick={handleClick}>Send message</Button>
            {/* render it on the bascis of the isLoading */}
            {isLoading ?  <LoadingSpinner  />  : <div className="leading-loose text-left pl-10 pr-10"><ReactMarkdown>{Info}</ReactMarkdown></div> }
        </div>
      </>

  )
}
