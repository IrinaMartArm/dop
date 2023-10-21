import { useState, ChangeEvent, RefObject, forwardRef } from "react";
import React from "react";

type PropsType = {
    text: RefObject<HTMLInputElement>
    // setText: (text: string)=> void
}

export const Input: React.FC<PropsType> = ({text}) => {

    // const textHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.setText(e.currentTarget.value)
    // }

    return (  
        <input ref={text}
        type="text"  
        // value={props.text} 
        // onChange={textHandler} 
        />
    );
}
