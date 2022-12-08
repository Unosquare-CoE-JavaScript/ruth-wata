import React, { useContext } from "react";
import AuthContext from "../../store/cart-context";
import ReactDOM from "react-dom";

const Backdrop = (props) => {

    return (
    <div className="w-screen h-full bg-none shadow-lg  fixed flex justify-center items-center rounded-xl ">
            { props.children }
    </div>
    )
}


export default function Modal({children }){

    return (
        <>
            {ReactDOM.createPortal(<Backdrop>{ children }</Backdrop>, document.getElementById('backdrop-root'))}

        </>

      
    )
}