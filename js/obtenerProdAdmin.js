const respuesta = fetch('./json/datos.json')
.then(respuesta => respuesta.json())
.then(datos => mostrarProductos(datos));

const mostrarProductos = (datos) => {
    let productos = "";
    const contenedor = document.querySelector('#contenedor');
    datos.forEach(dato => {
        productos += `<div class="card m-2" style="width: 100%; max-width: 250px;">
        <img src=${dato.imagen} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${dato.titulo}</h5>
          <p class="card-text">$${dato.precio}</p>
          <p class="card-text">${dato.descripcion}</p>
          <div>
            <button class="btn btn-primary" id="editar" type="submit"><i class="bi bi-pencil-fill "></i></button>
          
          <button class="btn btn-danger" id="borrar" type="submit"><i class="bi bi-trash3-fill "></i></button>
          </div>
          
          
        </div><div id="editando" class="col " style="display: none;"> 
        <nav id="celu">
          <i class="bi bi-x-circle" id="cerrar"></i>
            <ul>
                <li><button class="btn btn-primary" type="submit"><h3>Editar Producto</h3></button></i>
                        <ul class="lista">
                            <h3>Editar Producto</h3>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Titulo</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                              </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Descripcion</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                              </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Precio</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                              </div>
                            <button class="btn btn-primary" type="submit">Editar</button>
                </li>
            </ul>
        </nav>
    </div>
      </div>
        `;

    }

    );
    contenedor.innerHTML = productos;
}
