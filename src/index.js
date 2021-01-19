import React from "react";
import ReactDOM from "react-dom";
import "./style.css";


function Appy()
{
    return(
        <div>
        <h1> hello world !!</h1>
        <button className="button"> hello</button>
        </div>
    )
}



ReactDOM.render(<Appy />, document.getElementById("root"));