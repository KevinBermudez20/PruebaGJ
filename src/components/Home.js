import PedidoLista from "./PedidoLista"
import Modal from "./Modal"
import {useState, useEffect} from "react";

let varPedidos = [{
  id: 1,
  fecha: '2022/10/21',
  numero:'1234',
  valor:'15000',
  estado:'despachado'
},
{
  id: 2,
  fecha: '2022/10/21',
  numero:'1234',
  valor:'12000',
  estado:'despachado'
},
{
  id: 3,
  fecha: '2022/10/21',
  numero:'1234',
  valor:'11000',
  estado:'pendiente'
},
{
  id: 4,
  fecha: '2022/10/21',
  numero:'1234',
  valor:'11000',
  estado:'proceso'
}]


function Home() {
  const [pedidos, setPedidos] = useState([])



  useEffect(()=>{
    setPedidos(varPedidos)
   
  },[])

  
  

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
                
                {
                  pedidos.map((pedido,i) =>
                    <PedidoLista 
                    key={i}
                    id={pedido.id}
                    fecha={pedido.fecha}
                    numero={pedido.numero}
                    valor={pedido.valor}
                    estado={pedido.estado}
                    />
                  )
                  
                }
                 
                                
                
                
              </tbody>
            </table></div>

        </div>

      </div>
    )
}



export default Home 