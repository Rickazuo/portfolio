import React from "react";
import { Carousel } from "react-responsive-carousel";

// Aplicacao do Carousel 

const CarouselBox = () => (
  <Carousel>
    <div className="carousel">
    <h3>
    Assistente no Gerenciamento de Processos Internos, Drakkar Solos - Agricultura de Precisão (Fev 2020 - Fev 2021)- Estágio
    </h3>
      <ul>
        <li>
        Identificação e mapeamento de processos;
        </li>
        <li>
        Utilização do Bizagi Modeler e Sólides para integração dos processos;
        </li>
        <li>
        Implementação de novos sistemas para os colaboradores
        </li>
      </ul>
    </div>
    <div className="carousel">
    <h3>
    Assistente no Desenvolvimento de projeto de TI, Drakkar Solos - Agricultura de Precisão (Fev 2020 - Fev 2021)- Estágio
    </h3>
      <ul>
        <li>
        Revisão sobre os prótotipos desenvolvidos;
        </li>
        <li>
        Auxílio na interpretação das demandas do cliente;
        </li>
      </ul>
    </div>
    <div className="carousel">
    <h3>
    Assistente de Escritório, Riosul Comércio de Motocicletas (Jan 2008 - Dez 2011) Meio Período
    </h3>
      <ul>
        <li>
        Lançamento de contas a pagar e a receber;
        </li>
        <li>
        Organização do material financeiro no sistema NBS;
        </li>
        <li>
        Serviço de manutenção de computadores
        </li>
      </ul>
    </div>
  </Carousel>
);

export default CarouselBox;