import CardDogs from './Components/CardDogs'
import { useState } from 'react'

function App() {
  const [ dogsData, setDogsData ] = useState([
    { 
      nombre: "Jack",
      age: 4,
      image: "https://picsum.photos/id/237/200/300"
    },{ 
      nombre: "Yoda",
      age: 9,
      image: "https://picsum.photos/id/237/200/300"
    },{ 
      nombre: "Luca",
      age: 2,
      image: "https://picsum.photos/id/237/200/300"
    }
  ])

  const [ dogsInsert, setDogsInsert] = useState({})
  const handleChangeDog = (event) => {
    console.log(event.target.name)
    let property = event.target.name
    let value = event.target.value
    console.log(value)
    setDogsInsert({...dogsInsert,[property]: value})
  }

  const saveDog = () => {
    setDogsData([...dogsData,dogsInsert])
  }

  // const [ dogsFavorite, setDogsFavorite] = useState({})
  // const handleChangeFav = (event) => {
  //   let property = event.target.name
  //   let value = event.target.value
  //   setDogsFavorite({...dogsFavorite,[property]: value})
  // }

  // const saveFavDog = () => {
  //   setDogsDataFav([...dogsFavorite,dogsInsert])
  // }


  return (
    <div className="App">

      <main>
        <h3 className="mt-3 text-center">PERROS</h3>
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <form>
                <div className="mb-3">
                  <label htmlfor="inputNombre" className="form-label">Nombre</label>
                  <input type="text" name="nombre" onChange={handleChangeDog} className="form-control" />
                  <label htmlfor="inputEdad" className="form-label">Edad (en años)</label>
                  <input type="text" name="age" onChange={handleChangeDog} className="form-control" />
                  <label htmlfor="inputImagen" className="form-label">Imagen</label>
                  <input type="text" name="image" onChange={handleChangeDog} className="form-control" />
                </div>
                <button type="button" onClick={saveDog} className="btn btn-primary">Guardar</button>                
              </form>
            </div>


            <div className="col-md-6">
              <h4 className="mt-5">Lista de perros</h4>
              {dogsData.map(( dog, index ) => {
                const {nombre, age, image} = dog
                return <CardDogs key={index} nombre={nombre} age={age} image={image} />
              })}              
            </div>

            <div className="col-md-6">
              <h4 className="mt-5">Lista de perros favoritos</h4>
              <div class="cardFavoritos border border-3 border-border-secondary mb-3" >
                <img src="" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Edad</p>
                    <a href="#" className="btn btn-primary">Eliminar</a>
                  </div>
              </div>             
            </div>


          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
