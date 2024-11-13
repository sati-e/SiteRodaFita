import React from 'react'
import PopFace from '../../../img/chapeu-pop-rosto-marrom.png'
import Email from '../../../img/icons/email.png'
import Chave from '../../../img/icons/chave.png'
import { Link} from 'react-router-dom'
import Bela from '../../../img/img filmes/img-bela.png'
import { useState } from 'react'


function Login(){

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  };


  //chama a função quando o formulario for enviado
  const handleSubmit = (event) =>{
    event.preventDefault();
    //print no console
    console.log('Email', email);
    console.log('Password', password)
  }


  return (
    <div>
      <h1 className="Titulo">Login</h1>
      <div className = "ConteinerLogin">
        <div className="ImgBela">
          <img src={Bela}/>
        </div>
          <div className="LoginDireita">
            <img src={PopFace}/>
            <img className="icons" src={Email}/>
              <form onSubmit={ handleSubmit }>
                <label htmlFor="email"></label>
                <input
                  name='email'
                  type="email"
                  id="email"
                  placeholder="exemplo@mail.com"
                  onChange={ handleEmailChange }
                  required
                />
                <img
                  className="icons" src={Chave}/>
                <label htmlFor="password"></label>
                <input
                  name='password'
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  onChange={ handlePasswordChange }
                  required
                />
                <button type="submit">Entrar</button>
              </form>
              <Link type='submit' className="Button" to={"/"}>Voltar</Link>
            <p>Escqueci a senha, <a href="">Clique aqui</a></p>
        </div>
      </div>
    </div>
  )
}


export default Login;

