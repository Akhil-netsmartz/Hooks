import React from 'react';
import './ErrorModal.module.css';

function ErrorModal(props){
    return(
        <div className = "modal" style = {{
            position: "fixed",
            left:"0",
            top:"0",
            bottom: "0",
            right:"0",
            "background-color":"rgba(0,0,0,0.5)",
            display:"flex",
            "align-items":"center",
            "justify-content": "center"
        }} onClick = {props.onConfirm}>
            <div className ="modal2" style = {{width:"500px","background-color": "white"}}>
            <div >
                <h3>{props.header}</h3>
            </div>
            <div>
                {props.message}
            </div>
            <div>
                <button onClick = {props.onConfirm}>Ok</button>
            </div>
        </div>
        </div>
    )
}
  
export default ErrorModal;