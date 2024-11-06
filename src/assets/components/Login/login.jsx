import React from 'react'
import PopFace from '../../../img/chapeu-pop-rosto-marrom.png'
import Email from '../../../img/icons/email.png'
import Chave from '../../../img/icons/chave.png'
import { Link} from 'react-router-dom'

function Login(){

  return (
  <div>
    <div class="LoginDireita">
      <h1 class="Titulo">Login</h1>
      <img src={PopFace}></img>
      <img class="icons" src={Email}></img>
      <label for="email"></label>
      <input type="email" id="email" placeholder="exemplo@mail.com"/>
      <img class="icons" src={Chave}></img>
      <label for="password"></label>
      <input type="password" id="password"placeholder="senha"/>
      <p>Escqueci a senha, <a href="">Clique aqui</a></p>
      <Link to={"/"}>Voltar</Link>
      
    </div>
  </div>
  )
}

export default Login;