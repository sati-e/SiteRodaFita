import UpperPage from "../navBar/upperPage";
import MrPop from '../../../img/mr-pop.png'
import Floridos from '../../../img/icons/florido.png'
import FloridosDois from '../../../img/icons/florido-direito.png'
import Onibaba from '../../../img/onibaba-poster.jpg'
import Tomate from '../../../img/tomate-poster.jpg'
import Invisivel from '../../../img/invisivel-poster.jpg'
import BotaoEsq from '../../../img/icons/seta-esquerda.png'
import BotaoDir from '../../../img/icons/seta-direita.png'
import Machine from '../../../img/img filmes/machine.png'
import Vamp from '../../../img/img filmes/vamp.png'
import Samurai from '../../../img/img filmes/samurai.png'
import { StyleHome } from "../styles/home.style";
import { Link} from 'react-router-dom';

function HomePage(){
    return (
    <div>
    <UpperPage />
    <StyleHome>
        <div className="Mainpage">
            <div className="Esquerda">
                <div className="TextWithCurves">
                    <img className="Floridos" src={Floridos}></img>
                    <p className="Texto"> Descubra um tesouro de clássicos do cinema em 
                        nosso site, onde a nostalgia encontra a sétima arte! 
                        Assista, reveja e redescubra filmes que moldaram a história 
                        do entretenimento, tudo em um só lugar </p>
                    <img className="Floridos" src={FloridosDois}></img>
                </div>

                <div className="Carrossel">
                    <img className="Postercarrossel" src={Invisivel}></img>
                    <img className="Postercarrossel" src={Tomate}></img>
                    <img className="Postercarrossel" src={Onibaba}></img>
                    <img className="Botaocarrossel" src={BotaoEsq}></img>
                    <img className="Botaocarrossel" src={BotaoDir}></img>
                </div>
            </div>
            <div className='Mrpopmain'>
                <img src={MrPop}></img>
            </div>            
        </div>
        <div className="SubTitulo">
            <h2>Nossos Planos</h2>
        </div>
        <div id="Planos" className="Planos">
            <div className="Conteiner">
                <h1 className="Titulo">Machine</h1>
                <img className="ImgPlanos"src={Machine}></img>
                <ul className="ListaPlanos">
                    <li className="Texto">Acesso a 7 filmes semanais</li>
                    <li className="Texto">Criar listas e avaliar filmes</li>
                </ul>
                {/*CRIAR CAMINHO*/}
                <Link className="BotaoComprar" to={""}><button>Comprar</button></Link>
            </div>
            <div className="Conteiner">
                <h1 className="Titulo">Vamp</h1>
                <img className="ImgPlanos"src={Vamp}></img>
                <ul className="ListaPlanos">
                    <li className="Texto">Acesso completo ao catálogo de filmes</li>
                    <li className="Texto">Criar listas, avaliar e comentar filmes</li>
                </ul>
                {/*CRIAR CAMINHO*/}
                <Link className="BotaoComprar" to={""}><button>Comprar</button></Link>
            </div>
            <div className="Conteiner">
                <h1 className="Titulo">Machine</h1>
                <img className="Imgplanos"src={Samurai}></img>
                <ul className="ListaPlanos">
                    <li className="Texto">Acesso completo ao catálogo de filmes</li>
                    <li className="Texto">Criar listas, avaliar e comentar filmes</li>
                    <li className="Texto">Criar sua página de críticas</li>
                </ul>
                {/*CRIAR CAMINHO*/}
                <Link className="BotaoComprar" to={""}><button>Comprar</button></Link>
            </div>
        </div>
    </StyleHome>
    </div>
    
    );
}

export default HomePage;