import './App.css';
import { useState } from 'react';
import TodoItem from './TodoItem';
import Modal from './Modal';
import Header from './Header';

function findItem(itemId, res) {
  for(let i=0; i<res.length; i++) {
    if(res[i]["id"] == itemId ) {
      return i;
    }
  }

  return -1;
}

function App() {
  if(localStorage.getItem("todolistApp") === null) {
    let sampleData = [
                        { "id": 0,
                          "text": "Do Homework",
                          "checked": false
                        },
                        { "id": 1,
                          "text": "Shopping",
                          "checked": true
                        },
                        { "id": 2,
                          "text": "Project",
                          "checked": true
                        },
                        { "id": 3,
                          "text": "Macbook",
                          "checked": false
                        }
                  ];
    localStorage.setItem("todolistApp", JSON.stringify(sampleData));
  }


  let [displayModel, setDisplayModel] = useState("");
  let [res, setRes] = useState(JSON.parse(localStorage.getItem("todolistApp")));

  return (
    <>
      <div className='to-do-list'>
        <Header setDisplayModel={setDisplayModel} />

        { 
          res?.length !== 0 ? (
            res.map((item) => (
              <TodoItem item={item} setRes={setRes} res={res} findItem={findItem} />
            ))
          ) : (
            <>
              <h1>Empty</h1>
            </>
          )

        }

        <Modal setDisplayModel={setDisplayModel} displayModel={displayModel} res={res} setRes={setRes} />
      </div>
    </>
  )
}

export default App
