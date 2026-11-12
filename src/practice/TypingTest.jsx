import React, { useCallback, useEffect, useState } from "react";

const TypingTest = () => {

    const [question, setQuestion] = useState("people so out lead person or line too by there time tell could much increase end after any head problem change may must on tell become end but man end system keep leave into well open or school");
    const [contentArr, setContentArr] = useState([]);
    const [typedText, setTypedText] = useState("people");

    const handleChange = (event) => {
        const text = event.target.value;
        setTypedText(text)
        setQuestion(text);
    }

    useEffect(() => {
        const arr = question.split("");
        setContentArr(arr);
    }, [question])


    return (
        <div className="">
            {contentArr.map((word, index) => <span key={index}>{word}</span>)}
            {/* <textarea className="w-full min-h-[50px] [field-sizing:content] resize-none color-red border-2 border-red-400 focus:outline-none rounded-md px-5 py-2" value={question} onChange={handleChange} /> */}
        </div>
    )
}

export default TypingTest;