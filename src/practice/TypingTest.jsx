import React, { useState } from "react";

const TypingTest = () => {

    const [content, setContent] = useState("people so out lead person or line too by there time tell could much increase end after any head problem change may must on tell become end but man end system keep leave into well open or school");
    const [typedText, setTypedText] = useState("");

    const handleChange = (event) => {
        const text = event.target.value;
        setTypedText(text)
    }

    return (
        <div className="min-h-[50px] w-full">
            <textarea
                className="w-full min-h-[50px] [field-sizing:content] resize-none border-2 border-red-400 focus:outline-none rounded-md px-5 py-2"
                value={typedText}
                onChange={handleChange}
            />
            <h3>Typing Test</h3>
        </div>

    )

}

export default TypingTest;