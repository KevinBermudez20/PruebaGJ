import { Link, Navigate } from "react-router-dom"

import { useState, useEffect } from 'react'



function Modal(props) {



    const { pedido } = props

    const [formData, setFormData] = useState(pedido)
    function actualizarPedido (){
        /* fetch */
        return true 
    }

    function submit(e) {
        e.preventDefault()
        

        if (validarFormulario(e)) {
          const result = actualizarPedido()

        }
    }



    function validarFormulario(e) {
        let errores = 0
    
            console.log(e.target[0]);



        for (let i = 0; i < 4; i++) {

            if (e.target[i].value == '' || e.target[i].value == 0) {


                e.target[i].parentNode.lastChild.classList.remove('noShow')
                e.target[i].parentNode.lastChild.innerText = 'No puede estar vacio'

                errores++

            } else {
                e.target[i].parentNode.lastChild.classList.add('noShow')
                e.target[i].parentNode.lastChild.innerText = 'No puede estar vacio'


            }

        }


        if (errores === 0) {

            return true
        } else {
            return false
        }


    }



    return (

        <div className="modal fade" id={props.target} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.titulo}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={click}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">


                        <form onSubmit={submit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputFecha">Fecha</label>
                                    <input type="date" className="form-control" id="inputFecha" onBlur={lectura} onClick={lectura} value={formData?.fecha?.split('/').join('-')} onChange={(e) => { setFormData({ ...formData, fecha: e.target.value }) }} />

                                    <p className="invalido noShow" ></p>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputValor">Valor pedido</label>
                                    <input type="number" className="form-control" id="inputValor" placeholder="ingrese valor del pedido" value={formData?.valor} onChange={(e) => { setFormData({ ...formData, valor: e.target.value }) }} />
                                    <p className="invalido noShow"></p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputNumero">Numero de pedido</label>
                                    <input type="number" className="form-control" id="inputNumero" placeholder="ingrese el numero" value={formData?.numero} onChange={(e) => { setFormData({ ...formData, numero: e.target.value }) }} />
                                    <p className="invalido noShow"></p>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState">State</label>
                                    <select id="inputState" className="form-control" defaultValue={formData?.estado || 0} onChange={(e) => { setFormData({ ...formData, estado: e.target.value }) }}>
                                        <option value={0}>Escoje una opcion</option>

                                        <option value="pendiente" >Pendiente</option>
                                        <option value='proceso' >Proceso</option>
                                        <option value='despachado' >Despachado</option>

                                    </select>
                                    <p className="invalido noShow"></p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={click}>cerrar</button>
                                <button type="submit" className="btn btn-primary">Guardar</button>

                            </div>
                        </form>




                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal
function click() {
    window.location.reload()
    /* let boton =  document.querySelector('#reseteador')
    boton.click() */

}
function resetear(e) {

    // let form =  document.querySelector('.modal-body form')
    // let fecha = document.querySelector('#inputFecha')
    // fecha.click()
    // form.reset()

    console.log(e)
}




function lectura(e) {

    let valor = e.target.value

    e.target.setAttribute('value', valor)


}

