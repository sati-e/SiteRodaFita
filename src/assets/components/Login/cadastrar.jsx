import React from 'react'
import PopFace from '../../../img/chapeu-pop-rosto-marrom.png'
import Email from '../../../img/icons/email.png'
import Chave from '../../../img/icons/chave.png'
import { Link} from 'react-router-dom'

function Cadastrar() {
  return (
    <div>
      <h1 class="Titulo">Cadastrar</h1>
        <div class="">
            <img class="icons" src={PopFace}></img>
            <input type="usename" id="usename" placeholder="Nome"/>
            <img class="icons" src={Email}></img>
            <label for="email"></label>
            <input type="email" id="email" placeholder="exemplo@mail.com"/>
            <img class="icons" src={Chave}></img>
            <label for="password"></label>
            <input type="password" id="password"placeholder="senha"/>
            <label for="password"></label>
            <input type="password" id="password"placeholder="senha"/>
            <Link class="Button" to={"/"}>Voltar</Link>
            <Link to={""}>Entrar</Link>
        </div>
    </div>
  )
}

export default Cadastrar;