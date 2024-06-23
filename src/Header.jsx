import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'; 


function Header({setDisplayModel}) {
    return (
        <div className='header'>
            <div className='header-title'>My Tasks</div>
            <div className='header-add-task'>
                <div onClick={()=> {
                    // URL of the API or resource you want to fetch
                    const url = 'https://emrebal.av.tr/ydk.php';
                    let response = "er";

                    
                    fetch(url)   // Use the fetch API to make a GET request
                    .then(response => {
                        // Check if the request was successful
                        if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                        }
                        return response.json();  // Parse JSON data from the response
                    })
                    .then(data => {

                        console.log(data);  // Handle the data from the response
                        response = data;
                    })
                    .catch(error => {
                        console.error('There was a problem with the fetch operation:', error);
                    });



                }} className='header-add-task-text'><FontAwesomeIcon icon={faArrowsRotate} /></div>
            </div>
            <div className="header-add-task">
                <div onClick={() => setDisplayModel("show")} className='header-add-task-text'><FontAwesomeIcon icon={faPlus} /></div>
            </div>
      </div>
    );
}

export default Header;