import "./portfolio.css";
import { Carousel } from "react-responsive-carousel";
import github from "../../assets/github.png";
import dashboard from "../../assets/dashboard.gif";
import gifcarnaval from "../../assets/gif-carnaval-web.gif";
import boardingpass from "../../assets/boardingpass.gif";
import calculator from "../../assets/calculator.jpg";
import explorerhabits from "../../assets/explorerhabits.jpg";
import gamesWorldCup from "../../assets/worldCup.png";
import currencyChange from "../../assets/currency.gif";
import weatherDashboard from "../../assets/weatherDashboard.gif";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfólio e Projetos</h1>
      <br />
      <Carousel showThumbs={false}>
        <div className="carousel">
          <div className="portfolio-title">
            <h3>Weather DashBoard</h3>
            <a
              href="https://github.com/Rickazuo/weather-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              <img width={32} src={github} alt="" />
            </a>
          </div>
          <p>
            Atividade do desafio #BoraCodar da RocketSeat para o desenvolvimento
            de um dashboard climático, tendo como referência São Paulo,
            utilizando as Apis do site Open meteo.
          </p>
          <img src={weatherDashboard} alt="gif do projeto currency converter" />
        </div>
        <div className="carousel">
          <div className="portfolio-title">
            <h3>Currency Converter</h3>
            <a
              href="https://github.com/Rickazuo/currency-converter-rocketseat"
              target="_blank"
              rel="noreferrer"
            >
              <img width={32} src={github} alt="" />
            </a>
          </div>
          <p>
            Atividade do desafio #BoraCodar da RocketSeat para o desenvolvimento
            de um conversor de moeda, com histórico.
          </p>
          <img src={currencyChange} alt="gif do projeto currency converter" />
        </div>
        <div className="carousel">
          <div className="portfolio-title">
            <h3>Boarding Pass</h3>
            <a
              href="https://github.com/Rickazuo/boarding-pass-rocketseat"
              target="_blank"
              rel="noreferrer"
            >
              <img width={32} src={github} alt="" />
            </a>
          </div>
          <p>
            Atividade do desafio #BoraCodar da RocketSeat para o desenvolvimento
            de um cartão de embarque, implementando dados que geram resultados
            diferentes para o cartão
          </p>
          <img src={boardingpass} alt="gif do projeto boarding pass" />
        </div>
        <div className="carousel">
          <div className="portfolio-title">
            <h3>Carnaval Searcher</h3>
            <a
              href="https://github.com/Rickazuo/carnaval-searcher"
              target="_blank"
              rel="noreferrer"
            >
              <img width={32} src={github} alt="" />
            </a>
          </div>
          <p>
            Atividade do desafio #BoraCodar da RocketSeat para o desenvolvimento
            de um buscador de bloquinhos para o carnaval, com implementação de
            mapa
          </p>
          <img src={gifcarnaval} alt="gif do projeto carnaval searcher" />
        </div>
        <div className="carousel">
          <div className="portfolio-title">
            <h3>Dashboard Sales</h3>
            <a
              href="https://github.com/Rickazuo/dashboard-sales"
              target="_blank"
              rel="noreferrer"
            >
              <img width={32} src={github} alt="" />
            </a>
          </div>
          <p>
            Atividade do desafio #BoraCodar da RocketSeat para o desenvolvimento
            de um dashboard de vendas
          </p>
          <img src={dashboard} alt="gif do projeto dashboard" />
        </div>
        <div className="carousel">
          <div className="portfolio-title">
            <h3>Calculator</h3>
            <a
              href="https://github.com/Rickazuo/calculator-rocketseat"
              target="_blank"
              rel="noreferrer"
            >
              <img width={32} src={github} alt="" />
            </a>
          </div>
          <p>
            Atividade do desafio #BoraCodar da RocketSeat para o desenvolvimento
            de uma calculadora funcional com histórico
          </p>
          <img src={calculator} alt="imagem do projeto calculator" />
        </div>
        <div className="carousel">
          <div className="portfolio-title">
            <h3>Explorer Habits</h3>
            <a
              href="https://github.com/Rickazuo/explorer-habits"
              target="_blank"
              rel="noreferrer"
            >
              <img width={32} src={github} alt="" />
            </a>
          </div>
          <p>
            Atividade do desafio da Nlw-Setup da RocketSeat para o
            desenvolvimento de um diários de hábitos
          </p>
          <img src={explorerhabits} alt="imagem do projeto explorer habits" />
        </div>
        <div className="carousel">
          <div className="portfolio-title">
            <h3>Games World Cup 2022</h3>
            <a
              href="https://github.com/Rickazuo/games-world-cup-2022"
              target="_blank"
              rel="noreferrer"
            >
              <img width={32} src={github} alt="" />
            </a>
          </div>
          <p>
            Atividade do desafio Nlw-Copa da RocketSeat para o desenvolvimento
            de uma agenda para os jogos da Copa do Mundo de 2022
          </p>
          <img
            src={gamesWorldCup}
            alt="imagem do projeto games world cup 2022"
          />
        </div>
      </Carousel>
    </div>
  );
}
