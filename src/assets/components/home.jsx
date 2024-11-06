import UpperPage from "./navBar/upperPage";
import MrPop from '../../img/mr-pop.png'
import Floridos from '../../img/icons/florido.png'
import FloridosDois from '../../img/icons/florido-direito.png'
import Onibaba from '../../img/onibaba-poster.jpg'
import Tomate from '../../img/tomate-poster.jpg'
import Invisivel from '../../img/invisivel-poster.jpg'
import BotaoEsq from '../../img/icons/seta-esquerda.png'
import BotaoDir from '../../img/icons/seta-direita.png'
import Machine from '../../img/img filmes/machine.png'
import Vamp from '../../img/img filmes/vamp.png'
import Samurai from '../../img/img filmes/samurai.png'

function HomePage(){
    return (
    <div>
    <UpperPage />
        <div class="Mainpage">
            <div class="Esquerda">
                <div>
                    <img class="Floridos" src={Floridos}></img>
                    <p class="Texto"> Descubra um tesouro de clássicos do cinema em 
                        nosso site, onde a nostalgia encontra a sétima arte! 
                        Assista, reveja e redescubra filmes que moldaram a história 
                        do entretenimento, tudo em um só lugar </p>
                    <img class="Floridos" src={FloridosDois}></img>
                    </div>
                    <div class="Carrossel">
                    <img class="Postercarrossel" src={Invisivel}></img>
                    <img class="Postercarrossel" src={Tomate}></img>
                    <img class="Postercarrossel" src={Onibaba}></img>
                    <img class="Botaocarrossel" src={BotaoEsq}></img>
                    <img class="Botaocarrossel" src={BotaoDir}></img>
                </div>
            </div>
            <div class='Mrpopmain'>
                <img src={MrPop}></img>
            </div>            
        </div>
        <div class="SubTitulo">
            <h2>Nossos Planos</h2>
        </div>
        <div class="Planos">
            <div class="conteiner">
                <img class="Imgplanos"src={Machine}></img>
                <p>Acesso a 7 filmes semanais
                Criar listas e avaliar filmes</p>
            </div>
            <img class="Imgplanos"src={Vamp}></img>
            <img class="Imgplanos"src={Samurai}></img>
        </div>
    </div>
    );
}

export default HomePage;