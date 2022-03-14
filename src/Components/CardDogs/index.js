const CardDogs = (props) => {
    
    return (
        <div className="cardDogs border border-3 border-border-secondary mb-3" >
            <img src={props.image} className="card-img-top" height="500px" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.age} años</p>
                <button type="button" className="btn btn-primary">Eliminar</button>
                <button type="button" className="btn btn-primary ms-2">Guardar en Favoritos</button>
                {/* <button type="button" onClick={props.deleteDog} className="btn btn-primary">Eliminar</button> */}
            </div>
        </div>
    )
}

export default CardDogs