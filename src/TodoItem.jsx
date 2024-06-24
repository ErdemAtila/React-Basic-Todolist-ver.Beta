import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({item, setRes, res, findItem}) {
    return (
        <div key={item.id} className={item.checked ? "to-do-container completed" : "to-do-container"}>
          <input
            className='to-do-checkbox'
            checked={item.checked} // Correctly setting the checked property
            onChange={(e) => {
              let newCheckboxValue = e.target.checked;
              let itemId = e.target.getAttribute("id");
              let theIndex = findItem(itemId, res);

              res[theIndex]["checked"] = newCheckboxValue;
              let newRes = [...res]
              setRes(newRes);
              localStorage.setItem("todolistApp", JSON.stringify(newRes));

            }}
            type="checkbox"
            id={item.id}
          />
          <p className='to-do-text'>{item.text}</p>
          <div onClick={(e)=> {
                    let itemId = e.currentTarget.getAttribute("id");
                    let theIndex = findItem(itemId, res);
                    res.splice(theIndex, 1);

                    let newRes = [...res];
                    setRes(newRes);
                    localStorage.setItem("todolistApp", JSON.stringify(newRes));
                    }} id={item.id} className={item.checked ? "to-do-delete completed" : "to-do-delete"
                    }>
              <FontAwesomeIcon id="1" icon={faTrash} />
          </div>
      </div>
    );
}

export default TodoItem;