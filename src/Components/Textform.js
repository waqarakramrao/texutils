import React, {useState} from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");
    const clickUpHandler = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        text === "" ? props.alert("Write something in textarea to convert it to Uppercase", "warning")
        :props.alert("Converted to UpperCase", "success")
    }
    const clickToHandler = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        text === "" ? props.alert("Write something in textarea to convert it to Lowercase", "warning")
        :props.alert("Converted to LowerCase", "success")   
    }
    const clearHandler = () => {
        setText("");
        text === "" ? props.alert("Textarea is already clear.", "warning")
        :props.alert("Textarea has been cleared", "success")   
    }
    const copyHandler = () => {
        let newText = document.getElementById("Textarea1");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        text === "" ? props.alert("Type something in textarea to copy.", "warning")
        :props.alert("Copied to clipboard", "success")  
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        text === "" ? props.alert("There is no text in textarea", "warning")
        :props.alert("Extra spaces has been removed", "success")  
    }
    const changeHandler = (event) => {
        setText(event.target.value);
    }
  return( 
  <div className={`container text-${props.mode==='light'? 'black': 'white'}`}>
<form>
  <div className="form-group">
    <label htmlFor={`exampleFormControlTextarea1`}><h2>{props.heading}</h2></label>
    <textarea className="form-control" style={{backgroundColor:props.mode==='light'? 'white': 'grey',
color:props.mode==='light'? 'black': 'white' }} value={text} onChange={changeHandler} id="Textarea1" rows="3">
    </textarea>
    <button type='button' className='btn btn-primary my-3 mx-1' onClick={clickUpHandler} >
        Change to Uppercase</button>
    <button type='button' className='btn btn-primary my-3 mx-1' onClick={clickToHandler} >
        Change to Lowercase</button>
    <button type='button' className='btn btn-primary my-3 mx-1' onClick={clearHandler} >
        Clear the clipboard</button>
    <button type='button' className='btn btn-primary my-3 mx-1' onClick={copyHandler} >
        Copy Text</button>
    <button type='button' className='btn btn-primary my-3 mx-1' onClick={handleExtraSpaces} >
        Remove Extra Spaces</button>


  </div>
</form>
<div className="container">
    <h3>Text Summary</h3>
    <p>{text.endsWith(" ") ? text.split(" ").length -1 :text.split(" ").length} Words and {text.endsWith(" ")?text.length-1 : text.length} Characters </p>
    {/* <p>{text.split(" ").length} Words and {text.length} Characters</p> */}
    <p>{text.split(" ").length * 0.008} Minutes to read</p>
    <h4>Text Preview</h4>
    <p>{text.length>0?text : "Enter some text in above box to preview"}</p>
</div>

  </div>
  );
}
