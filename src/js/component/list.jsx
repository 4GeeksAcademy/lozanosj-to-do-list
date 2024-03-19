import React, { useState } from 'react'

function List() {

    const [toDoList, setToDoList] = useState("")
    const [addItem, setAddItem] = useState([])
    
    const handleBtn = () => {
        if (toDoList !== ''){
            setAddItem([...addItem, toDoList])
        }

        setToDoList("")
    }
    




    return (

        <div className='list col-6'>

            <div className='header container-fluid'>
                <h1>To Do List</h1>
            </div>



            <div className="card">
                <div className="card">
                    <div className="card-header bg-white roboto d-flex align-items-center">
                        <div className="form-floating col-10">


                            <input type="text" className="form-control border-0" id="floatingInput" placeholder="Press enter to add." value={toDoList} onChange={(e) => { setToDoList(e.target.value) }} />

                            <label htmlFor="floatingInput">What needs to be done?</label>
                        </div>

                        <div className="">
                            <button type='submit' onClick={handleBtn}>Add to list</button>
                        </div>

                    </div>

                    <div className="card-body">

                        <ul className="list-group list-group-flush">

                            <li className="list-group-item ">{addItem}<span className="close-btn">remove</span></li>

                        </ul>

                    </div>


                    <div className="card-footer text-body-secondary">
                        5 items left
                    </div>

                </div>
            </div>
        </div>
    )
}

export default List
