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


  const [Text, setText] = useState("")

  return (

      <div className={`text-${props.mode==='light'?'dark': 'light'}`}>
          <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                    className={`form-control bg-${props.mode==='light'?'secondary': 'light'}` }
                    id="exampleFormControlTextarea1"
                    value={Text} 
                    onChange={handleOnChange}
                    rows="10"></textarea>
                </div>
            <div className="hstack gap-1">   
            <button 
            type="button" 
            onClick={handleUpper}
            className="btn btn-primary mx-2">
                Convert to UpperCase
            </button>

            <button 
            type="button" 
            onClick={handleLower}
            className="btn btn-primary mx-4">
                Convert to LowerCase
            </button>
            <button type="button" onClick={() => {setText("")}} className="btn btn-danger">Clear Text</button>
            </div> 

            <div className="container my-4">
                <h2>Text Summary</h2>
                <p>{Text}</p>
            </div>

            <div className={`container text-center bg-${props.mode} my-4`}>
                <h2>Text Preview</h2>
                <p>{Text}</p>
            </div>
        </div>

  )
}

export default TextForm