import React from 'react'
import PopFace from '../../../img/chapeu-pop-rosto-marrom.png'
import Email from '../../../img/icons/email.png'
import Chave from '../../../img/icons/chave.png'
import { Link} from 'react-router-dom'
import Bela from '../../../img/img filmes/img-bela.png'

function Login(){

  return (
    <div>
      <h1 class="Titulo">Login</h1>
      <div class = "ConteinerLogin">
        <div class="ImgBela">
          <img src={Bela}></img>
        </div>
          <div class="LoginDireita">
            <img src={PopFace}></img>
            <img class="icons" src={Email}></img>
            <label for="email"></label>
            <input type="email" id="email" placeholder="exemplo@mail.com"/>
            <img class="icons" src={Chave}></img>
            <label for="password"></label>
            <input type="password" id="password"placeholder="senha"/>
            <p>Escqueci a senha, <a href="">Clique aqui</a></p>
            <Link class="Button" to={"/"}>Voltar</Link>
            <Link class="Button" to={""}>Entrar</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;