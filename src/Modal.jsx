import { useState } from "react";

function Modal({setDisplayModel, displayModel, res, setRes}) {
    let [text, setText] = useState("");
    return (
        <div className={'pop-up-container ' + displayModel}>
        <div className='pop-up'>
          <div className='pop-up-title'>Add New Task</div>
          <input value={text} onChange={(e)=> {setText(e.target.value)}} type="text" className='pop-up-input'/>
          <div className='pop-up-button-container'>
            <button onClick={()=> setDisplayModel("")} className='pop-up-button back'>Go Back</button>
            <button onClick={()=>{
                if(text.length != 0) {
                    res[res?.length - 1] == undefined ? 
                                      res.push({"id": 1, "text": text, "checked": false}):
                                      res.push({"id": res[res.length - 1]["id"] + 1, "text": text, "checked": false});
                    
                    let newRes = [...res];
                    setRes(newRes);
                    localStorage.setItem("todolistApp", JSON.stringify(newRes));
                    setDisplayModel("");
                    setText("");
                }

            }} 
            className='pop-up-button add'>Add Task</button>
          </div>
        </div>
      </div>
    );
}

export default Modal;