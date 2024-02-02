import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {


    const [text, setText] = useState("");
    const [newText, setNewText] = useState("");

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        console.log("Buttom Clicked");
        const convertedTex = text.replace(/\s+/g, ' ').toUpperCase().trim();
        setNewText(convertedTex);

    }

    const handleLoClick = () => {
        console.log("Buttom Clicked");
        const convertedTex = text.replace(/\s+/g, ' ').toLowerCase().trim();
        setNewText(convertedTex);

    }

    const handleRmvSpaceClick = () => {
        console.log("Buttom Clicked");
        const convertedTex = text.replace(/\s+/g, ' ');
        setNewText(convertedTex);

    }

    const handleClrTextClick = () => {
        setText("");
        setNewText("");

    }

    return (
        <div className="mb-3 mt-3" style={{color: props.mode ==="dark"?"white":"black"}} >
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
                rows="3"
                placeholder='Enter your input'
                />
            <button disabled={text.length === 0} className='btn btn-primary mb-2 mt-2 ms-2' onClick={handleUpClick}>Upper Case</button>
            <button disabled={text.length === 0} className='btn btn-primary mb-2 mt-2 ms-2' onClick={handleLoClick}>Lower Case</button>
            <button disabled={text.length === 0} className='btn btn-primary mb-2 mt-2 ms-2' onClick={handleRmvSpaceClick}>Remove Space</button>
            <button disabled={text.length === 0} className='btn btn-primary mb-2 mt-2 ms-2' onClick={handleClrTextClick}>Clear Text</button>

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
                    value={newText}
                    rows="6" 
                    placeholder='Text will displayed here'
                    
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
                    readOnly 
                    id='displayTextDetail' 
                    value={newText.split(' ').filter((element)=>{ return element.length!==0}).length}/>

                <label htmlFor="displayTextDetail">Character count: </label>
                <input 
                    style={{
                    color: props.mode ==="dark"?"white":"black", 
                    backgroundColor: props.mode ==="dark"?"#22396f":"white"
                    }} 
                    className='border-0 m-0' 
                    readOnly id='displayTextDetail' 
                    value={" "+newText.length}/>
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