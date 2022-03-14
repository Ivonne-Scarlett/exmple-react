

function App() {



  return (
    <div className="App">

      <main>
        <h3 className="mt-3 text-center">PERROS</h3>
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <form>
                <div className="mb-3">
                  <label for="inputNombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" />
                  <label for="inputEdad" className="form-label">Edad</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" />
                  <label for="inputImagen" className="form-label">Imagen</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" />
                </div>
                <button type="button" className="btn btn-primary">Guardar</button>                
              </form>
            </div>


            <div className="col-md-6">
              <h4 className="mt-5">Lista de perros</h4>
              <div className="cardDogs border border-2 border-border-secondary" >
                <img src="" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Edad</p>
                    <a href="#" className="btn btn-primary">Eliminar</a>
                    <a href="#" className="btn btn-primary ms-2">Guardar en Favoritos</a>
                  </div>
              </div>
            </div>

            <div className="col-md-6">
              <h4 className="mt-5">Lista de perros favoritos</h4>
              <div class="cardFavoritos border border-2 border-border-secondary" >
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
