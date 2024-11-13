import React from 'react'
import PopFace from '../../../img/chapeu-pop-rosto-marrom.png'
import Email from '../../../img/icons/email.png'
import Chave from '../../../img/icons/chave.png'
import { Link} from 'react-router-dom'
import Igor from '../../../img/img filmes/img-igor.png'

function Cadastrar() {
  return (
    <div>
      <h1 className="Titulo">Cadastrar</h1>
      <div className = "ConteinerLogin">
        <div className="ImgIgor">
          <img src={Igor}></img>
        </div>
          <div className="cadastrarEsquerda">
              <img className="icons" src={PopFace}></img>
              <input type="usename" id="usename" placeholder="Nome"/>
              <img className="icons" src={Email}></img>
              <label for="email"></label>
              <input type="email" id="email" placeholder="exemplo@mail.com"/>
              <img className="icons" src={Chave}></img>
              <label for="password"></label>
              <input type="password" id="password"placeholder="senha"/>
              <label for="password"></label>
              <input type="password" id="password"placeholder="senha"/>
              <Link className="Button" to={"/"}>Voltar</Link>
              <Link to={""}>Entrar</Link>
          </div>
      </div>
    </div>
  )
}

export default Cadastrar;