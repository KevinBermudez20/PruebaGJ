import Modal from "./Modal"




function PedidoLista(props) {
    
    return (
        <tr>
            
            <td>{props.fecha}</td>
            <td>{props.numero}</td>
            <td>${props.valor}</td>
            <td>{props.estado}</td>
            <td className='botones'>
                <button type="button" className="botonEditar btn btn-warning" data-toggle="modal" data-target= {`#exampleModal${props.id}`} ><i className="fa-solid fa-pen-to-square"></i></button>
                <Modal target={`exampleModal${props.id}`} titulo={`Editando pedido ${props.id}`} pedido={props}/>
                <button type="button" className="botonEliminar btn btn-danger" ><i className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    )
}

export default PedidoLista