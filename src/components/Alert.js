import React from 'react'
import { useState } from 'react';

export default function Alert(props) {

  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };
  return (
    // props.alert &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
    //   <strong>{props.alert.type}</strong>: {props.alert.msg}
    //   <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    // </div>


    props.alert && isVisible && <div onClick={handleClick}className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{props.alert.type}</strong> {props.alert.msg}
      <button type="button" className="btn-close "   data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
