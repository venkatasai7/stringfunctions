import React,{useState} from 'react'




export default function TextForm(props) {
    const [text, setText] = useState("enter here..");
   
    const HandleUpperCaseClick = () =>
        {
            console.log("upper case was clicked");
            let outtext = text.toUpperCase();
            setText(outtext);
            
        };

        const HandleLowerCaseClick = () =>
            {
                console.log("Lower case was clicked");
                let outtext = text.toLowerCase();
                setText(outtext);
                
            };

    const HandleOnChange = (event) => {
            console.log("on change")
            setText(event.target.value);
    };


    const CopyToClipBoard = (event) =>
        {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert("Copy successful!");
        } catch (err) {
            console.log("Copy failed: " + err);
        }
        document.body.removeChild(textArea);

        };

        const OnClear = (event) =>
            {
                setText("");
            };

    return (
    <>
    <div>
        <div className="mb-3">
            <h2>{props.heading}</h2>
            <textarea className="form-control"  value={text} onChange={HandleOnChange} id="MyBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-2" onClick ={HandleUpperCaseClick}> Convert to Uppercase</button>
        <button className="btn btn-primary mx-3 my-2" onClick ={HandleLowerCaseClick}> Convert to Lowercase</button>

        <button className="btn btn-primary mx-3 my-2" onClick ={CopyToClipBoard}> Copy Text</button>
        <button className="btn btn-primary mx-3 my-2" onClick ={OnClear}> Clear</button>
    </div>
    <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").length} words , {text.length} characters.</p>
        

    </div>
    </>
  )
}
