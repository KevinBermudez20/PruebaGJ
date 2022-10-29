import Modal from "./Modal"




function PedidoLista(props) {
    return (
        <tr>

            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td className='botones'>
                <button type="button" className="botonEditar btn btn-warning" data-toggle="modal" data-target= {`#exampleModal${props.id}`} ><i className="fa-solid fa-pen-to-square"></i></button>
                <Modal target={`exampleModal${props.id}`} titulo={`Editando pedido ${props.id}`}/>
                <button type="button" className="botonEliminar btn btn-danger" ><i className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    )
}

export default PedidoLista