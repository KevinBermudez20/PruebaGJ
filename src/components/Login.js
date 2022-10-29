import { Link } from "react-router-dom"






function Login(){
    return (
        <div className="Login">
        {
          <form>
          <div className="form-group" onKeyUp={validarEmail}>
            <label htmlFor="exampleInputEmail1">Usuario</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digita tu ID o correo electronico " />
            <small id="mensaje-email" className="form-text text-muted">Recuerda, nunca compartas tu correo con nadie mas</small>
          </div>
          <div className="form-group" onFocus={validarContrasena} onKeyUp={validarContrasena}>
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
            <small id="mensaje-contrasena" className=" noShow form-text invalido">*Este campo no puede estar vacio</small>
          </div>
          
          <Link to="/home" ><button id="contrasena" type="submit" className="btn btn-primary" onClick={validarFormulario} >Ingresar</button></Link>
        </form>
        }
      </div>
    )
} 

export default Login



function validarEmail(e){
    
  let msg = document.querySelector('#mensaje-email')
  let predeterminado = "Recuerda, nunca compartas tu correo con nadie mas"

  console.log(e.target.value ,'     '+ predeterminado)
  if (!e.target.value.split('@')[1]) {
    msg.innerHTML = 'Correo no valido'  
    msg.classList.add('invalido') 
    msg.classList.remove('text-muted')                                    
  }
  else{
    msg.innerHTML = predeterminado
    msg.classList.add('text-muted') 
    msg.classList.remove('invalido') 
  }
}


function validarFormulario(e) {
        let errores = 0       
        let msgC = document.querySelector('#mensaje-contrasena')
        let msgE = document.querySelector('#mensaje-email')
        
        let inputContrasena = document.querySelector("#exampleInputPassword1")
        let inputEmail = document.querySelector("#exampleInputEmail1")
  console.log(msgC)

  if ( inputContrasena.value.length < 8) {
    msgC.classList.remove('noShow') 
    e.preventDefault() 
    errores++                                    
  }
  if ( !inputEmail.value.split('@')[1]) {
    msgE.innerHTML = 'Correo no valido'  
    msgE.classList.add('invalido') 
    msgE.classList.remove('text-muted')  
    e.preventDefault()
    errores++                                     
  }

  if(errores === 0){
    
    
    
    
    
  }
  
}


function validarContrasena(e){
    
  

 
  
  let msg = document.querySelector('#mensaje-contrasena')

  

  if (e.target.value.length > 0) {
    msg.classList.add('noShow')                                   
  }
  else{
    msg.classList.remove('noShow')
  }
  
  
}