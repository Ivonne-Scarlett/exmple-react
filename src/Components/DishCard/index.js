const DishCard = props => {
    const { name, region, type, picture } = props.dishData
    return (
      <div className='col-12 col-md-6 mb-3'>
        <div className='card border rounded dish-card shadow'>
          <img src={picture} alt='' />
          <div className='card-body'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Nombre: {name}</li>
              <li className='list-group-item'>Región: {region}</li>
              <li className='list-group-item'>Tipo: {type}</li>
            </ul>
            <button type="button" className="btn btn-dark">Elimnar</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default DishCard