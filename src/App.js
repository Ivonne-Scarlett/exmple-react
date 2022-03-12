import { useState } from 'react'

function App() {
  
  const [toDo, setToDo] = useState([
    {list: "Sacar a pasear al perro"}
  ])

  const [userListData, setUserListData] = useState('')
  const getInputData = (event) => {
    setUserListData(event.target.value)
  }

  const saveUser = () => {
    setAll([...toDo, {toDo:inputValue}])
  }
  
  return (
    <div className="App">
      
      <main>
        <div className="container">
          <div className="row">
      

            <div className="col-md-6">
              <div className="d-flex flex-column col-10">
                <label className="mt-3" htmlFor="name">Nombre</label>
                <input type="text" name="name" onChange={getInputData}/>
                <label className="" htmlFor="date">Fecha</label>
                <input type="date" className="mb-3" name="date" onChange={getInputData}/>
                <button className="Guardar" onclick={saveUser}>Guardar</button>
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="mt-3">To do list</h2>
              
              <form action="">
                {/* <label className="" >Nombre</label>
                <label className="">Fecha</label>
                <input type="checkbox" /> */}
                
              </form>          
              
            </div>
            

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
