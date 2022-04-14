import React,{ useState} from 'react'

function TextForm(props) {


const handleUpper = ()=> {
    document.getElementById("exampleFormControlTextarea1").classList.add("bg-success")
    setText(Text.toUpperCase())
}

const handleLower = ()=> {
    document.getElementById("exampleFormControlTextarea1").classList.add("bg-success")
    setText(Text.toLowerCase())
}

const handleOnChange = (event) => {
    document.getElementById("exampleFormControlTextarea1").classList.remove("bg-success") 
    setText(event.target.value)
}

const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1")
    text.select();
    navigator.clipboard.writeText(text.value); // this copies but selects the entire text
    //  to copy and deselect the text we add
    document.getSelection().removeAllRanges();
}

  const [Text, setText] = useState("")

  return (

      <div className={`text-${props.mode==='light'?'dark': 'light'}`}>
          <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                    className={`form-control bg-${props.mode==='light'?'secondary': 'light'} text-${props.mode==='light'?'white': 'dark'}` }
                    id="exampleFormControlTextarea1"
                    value={Text} 
                    onChange={handleOnChange}
                    rows="10"></textarea>
                </div>
            <div className="hstack">   
            <button 
            type="button" 
            disabled={Text.length===0}
            onClick={handleUpper}
            className="btn btn-primary mx-2">
                Convert to UpperCase
            </button>

            <button 
            type="button" 
            disabled={Text.length===0}
            onClick={handleLower}
            className="btn btn-primary mx-4">
                Convert to LowerCase
            </button>
            
            <button 
             disabled={Text.length===0}
            type="button" 
            onClick={handleCopy}
            className="btn btn-primary">
                Copy to Clipboard
            </button>
            
            <button disabled={Text.length===0} type="button" onClick={() => {setText("")}} className="btn btn-danger position-absolute end-0 me-5">Clear Text</button>

            </div> 

            <div className="container my-4">
                <h2>Text Analysis</h2>
                <p>
                    <strong>
                        {Text.split(/\s+/).filter((element) => {return element.length !== 0}).length}
                        </strong> 
                        word and <strong>{Text.length}
                        </strong> 
                        characters in the above text you provided.
                        </p>
            </div>

            <div className={`container text-center bg-${props.mode} my-4`}>
                <h2>Text Preview</h2>
                <p>{Text}</p>
            </div>
        </div>

  )
}

export default TextForm