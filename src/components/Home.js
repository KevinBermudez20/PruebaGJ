import PedidoLista from "./PedidoLista"
import Modal from "./Modal"


function Home() {
    return(
        <div className='Home'>

        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Listado de pedidos</span>
          {/* <!-- Button trigger modal --> */}
          <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
            Nuevo Pedido
          </button>

          {/* <!-- Modal --> */}
          <Modal target={'exampleModal'} titulo={'Nuevo Pedido'}/>
        </nav>
        <div className='Main'>
          <div className='containerTable'>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Numero</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Estado</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <PedidoLista id={1}/> 
                <PedidoLista id={2}/> 
                <PedidoLista id={3}/> 
                <PedidoLista id={4}/> 
                <PedidoLista id={5}/>                
                
                
              </tbody>
            </table></div>

        </div>

      </div>
    )
}

export default Home 