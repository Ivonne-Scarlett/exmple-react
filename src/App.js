import { useState } from 'react'

function App() {



  return (
    <div className="App">

      <main>
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>


            <div className="col-md-6">
              <div className="d-flex flex-column col-10">
                <label className="mt-3" htmlFor="name">Nombre</label>
                <input type="text" name="name" onChange={getInputData} />
                <label className="" htmlFor="date">Fecha</label>
                <input type="date" className="mb-3" name="date" onChange={getInputData} />
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
