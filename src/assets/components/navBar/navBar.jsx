import React from 'react'

const navBar = () => {
  return (
    <div>
    {/*upper Navbar*/}
      <div>
        <div class="Nav"> 
          <h1>Roda Fita</h1>
          <h2>Golden Age Cinema</h2>
          <div class = "Buttons">
            <button href="/login.jsx">Planos</button>
            <button href="/login.jsx">Sobre nós</button>
            <button href="/login.jsx">Entrar</button>
            <button href="/login.jsx">Cadastrar</button>
            <div class="paragrafo">
              <p>Descubra um tesouro de clássicos do cinema em nosso site, onde a nostalgia encontra a sétima arte! Assista, reveja e redescubra filmes que moldaram a história do entretenimento, tudo em um só lugar</p>
            </div>
            <img src="/mr-pop.png" alt="mr-pop.png" />
          </div>
        </div>
      </div>
    {/*lower Navbar*/}
      lower navbar
    </div>
  )
}

export default navBar
