import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case" , "sucess")
  }
  const handleLoClick = () =>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case" , "sucess")
  }
  const handleClear = () =>{
    // console.log("clear text" + text);
    let newText = "";
    setText(newText);
    props.showAlert("clear text" , "sucess")
  }
  const handleOnChange = (event) =>{
    // console.log("on change");
    setText(event.target.value);
  }
  const handleCopy = ()=>{
    // console.log('i am copy');
    let text = document.querySelector("#myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("copy text" , "sucess")
  }
  const handleExtraSpace = ()=>{
    // console.log('i am remove extra space');
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
  }
  const handleColor = ()=>{
    // console.log('i am color');
    let text = document.querySelector("#myBox");
    text.style.color="green";
    text.style.backgroundColor="#042743";
  }
  const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
       <div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button><br /><br />
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button><br /><br />
<button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button><br /><br />
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>RemoveExtraSpace</button>
<button className="btn btn-primary mx-2" onClick={handleColor}>Color</button>
</div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
       <h2>Your text is here</h2>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008*text.split(" ").length}Minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:'Enter somthing in the textbox above to preview it here'}</p>
    </div>
    </>
    )
}
