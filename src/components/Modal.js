
function Modal(props) {
    return (

        <div className="modal fade" id={props.target} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.titulo}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">


                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputFecha">Fecha</label>
                                    <input type="date" className="form-control" id="inputFecha"  onBlur={lectura} onClick={lectura}/>
                                    <p className="error noShow"></p>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputValor">Valor pedido</label>
                                    <input type="number" className="form-control" id="inputValor" placeholder="valor del pedido $" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputNumero">Numero de pedido</label>
                                    <input type="number" className="form-control" id="inputNumero" placeholder="numero del pedido" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState">State</label>
                                    <select id="inputState" className="form-control">
                                        <option defaultValue>Escoje una opcion</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="reset" className="btn btn-secondary" data-dismiss="modal" onClick={resetear}>cerrar</button>
                                <button type="submit" className="btn btn-primary" onClick={validarFormulario}>Guardar</button>
                            </div>
                        </form>




                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal

function resetear(e) {
    
    let form =  document.querySelector('.modal-body form')
    let fecha = document.querySelector('#inputFecha')
    fecha.click()
    form.reset()
}


function validarFormulario(e){
    let valueFecha = ""
    
    let fecha = document.querySelector('#inputFecha')
    
    let valor = document.querySelector('#inputValor')
    let numero = document.querySelector('#inputNumero')
    let state = document.querySelector('#inputState')

    // console.log(e,fecha,valor,numero,state);
    
    /* fecha.addEventListener('click', (e) =>{
        
        valueFecha = e.target.value
        console.log(valueFecha , e)
    }) */

    console.log(e.target.form[0].value)
    console.log(e.target.form[1].value)
    console.log(e.target.form[2].value)
    console.log(e.target.form[3].value)


    for (let i = 0; i < 4; i++) {
       
        if (e.target.form[i].value == '' || e.target.form[i].value == 'Escoje una opcion') {
            

            /* e.target.form[i].parentNode.lastChild.classlist.remove('noShow') */
            e.target.form[i].parentNode.lastChild.innerText = 'No puede estar vacio'


            console.log('entro' , e.target.form[i].parentNode)
            e.preventDefault()
        }
        
    }


    
    

}

function lectura(e) {
    
    let valor = e.target.value
    
    e.target.setAttribute('value', valor)

    
}