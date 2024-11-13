import React from 'react'
import PopFace from '../../../img/chapeu-pop-rosto-marrom.png'
import Email from '../../../img/icons/email.png'
import Chave from '../../../img/icons/chave.png'
import { Link} from 'react-router-dom'
import Igor from '../../../img/img filmes/img-igor.png'
import { useState } from 'react'


function Cadastrar() {

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    //print no console
    console.log('Nome', username);
    console.log('Email', email);
    console.log('Password', password)
  }

  return (
    <div>
      <h1 className="Titulo">Cadastrar</h1>
      <div className = "ConteinerLogin">
        <div className="ImgIgor">
          <img src={Igor}></img>
        </div>
          <div className="cadastrarEsquerda">
              <img className="icons" src={PopFace}></img>
              <form onSubmit={ handleSubmit }>
                <input 
                  type="usename" 
                  id="usename" 
                  placeholder="Nome"
                  onChange={(e)=> setUsername(e.target.value)} //atualiza o valor do estado a cada digitalização
                  required
                />
                <img className="icons" src={Email}></img>
                <label htmlFor="email"></label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="exemplo@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required  
                />
                <img className="icons" src={Chave}></img>
                <label htmlFor="password"></label>
                <input 
                  type="password" 
                  id="password"
                  placeholder="senha"
                  onChange={(e)=> setPassword(e.target.value)}
                  required  
                />
                <label htmlFor="password"></label>
                <input 
                  type="password" 
                  id="password"
                  placeholder="senha"
                  required
                />
                <button type="submit">Entrar</button>
              </form>
              <Link className="Button" to={"/"}>Voltar</Link>
          </div>
      </div>
    </div>
  )
}

export default Cadastrar;