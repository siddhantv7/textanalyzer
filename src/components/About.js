import React, { useState } from 'react'


export default function About(props) {

    const [darkMode, setDarkModeColor] = useState({
        color: 'black',
        backgroundColor: "white"
    });

    const [btnStyle, setBtnStyle] = useState("Dark Mode");

    const changeBgColor = () => {
        if (darkMode.color === "white" && darkMode.backgroundColor === "black") {
            setDarkModeColor({
                color: 'black',
                backgroundColor: "white"
            });
            setBtnStyle("Dark Mode");
        } else if (darkMode.color === "black" && darkMode.backgroundColor === "white") {
            setDarkModeColor({
                color: 'white',
                backgroundColor: "black"
            });
            setBtnStyle("White Mode");
        }
        else {
            setDarkModeColor({
                color: 'black',
                backgroundColor: "white"
            });
        }


    }

    return (
        <div>
            {/* <div style={darkMode}> */}
            <div style={{color: props.mode ==="dark"?"white":"black"}} className={`text-${props.mode === "light" ? "dark" : "light"}`}>
                <h2 >About Us</h2>
                <div className="page-content mt-3">
                    <div className="block-title">Welcome to Framework7</div>
                    {/* <div className="block block-strong" style={darkMode}> */}
                    <div className={`text-${props.mode === "light" ? "dark" : "light"} block block-strong`} style={{color: props.mode ==="dark"?"white":"black"}} >
                    
                        {/* <p style={{color:"red"}}>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel. It is also an indispensable prototyping apps tool to show working app prototype as soon as possible in case you need to. Framework7 is created by Vladimir Kharlampidi (iDangero.us).</p> */}
                        <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel. It is also an indispensable prototyping apps tool to show working app prototype as soon as possible in case you need to. Framework7 is created by Vladimir Kharlampidi (iDangero.us).</p>
                        <p>The main approach of the Framework7 is to give you an opportunity to create iOS and Android (Material) apps with HTML, CSS and JavaScript easily and clear. Framework7 is full of freedom. It doesn't limit your imagination or offer ways of any solutions somehow. Framework7 gives you freedom!</p>
                        <p>Framework7 is not compatible with all platforms. It is focused only on iOS and Android (Material) to bring the best experience and simplicity.</p>
                        <p>Framework7 is definitely for you if you decide to build iOS and Android hybrid app (Cordova or PhoneGap) or web app that looks like and feels as great native iOS or Android (Material) apps.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <button type="button" onClick={changeBgColor} className="btn btn-dark mt-3">
                    {btnStyle}
                </button>
            </div>
        </div>
    )
}
