import { getImageUrl } from "../utils"
import { useState } from "react";

function FaqItem({question, answer}){
    const[show, setShow] = useState(false);
    

    function handleClick(){
        setShow(show => !show);
    }

    const hiddenText = show? '' : 'hidden';
    const imageUrl = show? getImageUrl("icon-minus.svg") : getImageUrl("icon-plus.svg");

    return (
        <div className="flex items-center justify-center flex-col text-black grow shrink max-w-full border-1 border-b" >
            <div className="flex items-center justify-end w-full">
                <h3 className="font-semibold grow text-sm"> {question} </h3>
                <img src={imageUrl} alt="faq-button" className="xs: w-6 ml-4 cursor-pointer" onClick={handleClick}/>
            </div>
            <p className={`max-w-full text-xs ${hiddenText}`}>{answer}</p>
        </div>
    )
}

export default FaqItem