import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {


    const [text, setText] = useState("Enter you input");
    const [upperText, setUpperText] = useState("Enter you input");

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("Buttom Clicked");
        const newText = text.toUpperCase().trim();
        setUpperText(newText);

    }

    const handleLoClick = () => {
        console.log("Buttom Clicked");
        const newText = text.toLowerCase().trim();
        setUpperText(newText);

    }

    return (
        <div className="mb-3" style={{color: props.mode ==="dark"?"white":"black"}} >
            <h3  >{props.headingText}</h3>
            <label htmlFor="myBox">Example Textarea</label>
            <textarea 
                className={`form-control border border-${props.mode ==="dark"?"white":"black"} rounded`}
                onChange={handleOnChange} 
                value={text}
                style={{
                        color: props.mode ==="dark"?"white":"black",
                        backgroundColor: props.mode ==="dark"?"#22396f":"white"
                    }}
                id="exampleFormControlTextarea1" 
                rows="3"/>
            <button className='btn btn-primary mb-2 mt-3' onClick={handleUpClick}>Convert to upper case</button>
            <button className='btn btn-primary mb-2 mt-3 ms-3' onClick={handleLoClick}>Convert to lower case</button>

            <div className="mt-2">
                <label htmlFor="displayText">Display Text:</label>
                <textarea
                    type="text"
                    id="displayText"
                    className={`form-control-plaintext border border-${props.mode ==="dark"?"white":"black"} rounded`}
                    readOnly
                    style={{
                        color: props.mode ==="dark"?"white":"black",
                        backgroundColor: props.mode ==="dark"?"#22396f":"white"
                    }}
                    value={upperText}
                    rows="7" 
                />
            </div>

            <div className="mt-2">
                <h3>Text Summary</h3>
                <label htmlFor="displayTextDetail">Word length: </label>
                <input 
                    style={{
                    color: props.mode ==="dark"?"white":"black", 
                    backgroundColor: props.mode ==="dark"?"#22396f":"white"
                    }} 
                    className='border-0 m-0' 
                    readOnly id='displayTextDetail' 
                    value={" "+upperText.split(' ').length}
                />
                <label htmlFor="displayTextDetail">Character count: </label>
                <input 
                    style={{
                    color: props.mode ==="dark"?"white":"black", 
                    backgroundColor: props.mode ==="dark"?"#22396f":"white"
                    }} 
                    className='border-0 m-0' 
                    readOnly id='displayTextDetail' 
                    value={" "+upperText.length}
                />
            </div>

        </div>
    )
}


TextForm.propTypes = {
    headingText: PropTypes.string.isRequired
}

//defaultProps is a name of default props
TextForm.defaultProps = {
    heading: "Enter the text to analyze"
}