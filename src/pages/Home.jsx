import { Link } from 'react-router-dom';
import Card from '../components/Card.jsx';
import Icon from '../components/Icon.jsx';
import { cars } from '../data/cars.js';

export default function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-line" /> ALUGUE UMA NOVA PERSPECTIVA
          </p>
          <h1 id="hero-title">
            O caminho
            <br />
            merece algo
            <br />
            <em>extraordinário.</em>
          </h1>
          <p className="hero-description">
            Carros que despertam emoções.
            <br />
            Experiências que ficam com você.
          </p>
          <Link className="button" to="/carros">
            Explore a frota <Icon />
          </Link>
          <div className="hero-footnote">
            <span className="small-star" aria-hidden="true">
              ✦
            </span>
            <p>
              Uma seleção de importados.
              <br />
              <strong>Um novo jeito de viver o caminho.</strong>
            </p>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={cars[0].image}
            alt="Porsche 911 branco em movimento por uma estrada entre colinas"
            width="1400"
            height="900"
            fetchPriority="high"
          />
          <span className="photo-label">AURUM SELECTION / 01</span>
          <div className="hero-caption">
            <div>
              <span>ÍCONE EM CADA DETALHE</span>
              <p translate="no">Porsche 911 Carrera</p>
            </div>
            <Link
              to="/carros?veiculo=porsche-911#simulador"
              className="hero-image-link"
              aria-label="Simular locação do Porsche 911 Carrera"
            >
              <Icon name="diagonal" size={25} />
            </Link>
          </div>
        </div>
      </section>
      <section className="brand-strip container" aria-label="Marcas da frota">
        <span>
          EXCELÊNCIA EM
          <br />
          CADA ESCOLHA
        </span>
        <div translate="no">
          <span>PORSCHE</span>
          <span>BMW</span>
          <span>Mercedes-Benz</span>
          <span>AUDI</span>
          <span>LAND ROVER</span>
          <span>MINI</span>
        </div>
      </section>
      <section className="section container" aria-labelledby="featured-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ESCOLHIDOS PARA SURPREENDER</p>
            <h2 id="featured-title">
              Encontre o seu
              <br />
              <em>próximo capítulo.</em>
            </h2>
          </div>
          <div className="section-heading-side">
            <p>
              Para a estrada, a cidade ou aquele momento
              <br className="desktop-break" /> que pede algo especial.
            </p>
            <Link className="text-link" to="/carros">
              Conheça toda a frota <Icon size={18} />
            </Link>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cars
            .filter((car) => car.featured)
            .map((car) => (
              <Card key={car.id} car={car} />
            ))}
        </div>
        <p className="section-disclaimer">
          Diárias ilustrativas para simulação. Imagens dos modelos são referenciais.
        </p>
      </section>
      <section id="como-funciona" className="journey section" aria-labelledby="journey-title">
        <div className="container">
          <div className="journey-heading">
            <div>
              <p className="eyebrow">MENOS COMPLICAÇÃO. MAIS CAMINHO.</p>
              <h2 id="journey-title">
                Sua próxima experiência
                <br />
                <em>começa com uma escolha.</em>
              </h2>
            </div>
            <p>
              Da inspiração à estimativa,
              <br />
              em poucos passos.
            </p>
          </div>
          <div className="journey-steps grid gap-10 md:grid-cols-3">
            {[
              {
                n: '01',
                title: 'Encontre seu estilo',
                text: 'Explore a seleção e filtre os modelos que combinam com a sua viagem.',
              },
              {
                n: '02',
                title: 'Escolha o período',
                text: 'Selecione seu carro e informe as datas de retirada e devolução.',
              },
              {
                n: '03',
                title: 'Imagine a experiência',
                text: 'Confira o valor estimado e planeje o próximo caminho. A simulação não realiza reservas.',
              },
            ].map((step) => (
              <div key={step.n}>
                <span className="step-number">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <Link className="button button-light" to="/carros">
            Simule sua locação <Icon />
          </Link>
        </div>
      </section>
      <section id="duvidas" className="section container faq-section" aria-labelledby="faq-title">
        <div>
          <p className="eyebrow">ANTES DE PEGAR A ESTRADA</p>
          <h2 id="faq-title">
            Tudo mais
            <br />
            <em>claro por aqui.</em>
          </h2>
          <p className="muted">As respostas para planejar sua simulação.</p>
        </div>
        <div className="faq-list">
          <details>
            <summary>A simulação realiza uma reserva?</summary>
            <p>
              Não. Esta é uma experiência acadêmica de uma locadora fictícia. Nenhuma reserva ou
              cobrança é realizada.
            </p>
          </details>
          <details>
            <summary>Como o valor estimado é calculado?</summary>
            <p>
              Multiplicamos a diária do veículo pelo número de dias entre a retirada e a devolução.
              Por exemplo, de segunda a quarta são 2 diárias.
            </p>
          </details>
          <details>
            <summary>Os valores incluem taxas ou seguros?</summary>
            <p>
              Os preços são ilustrativos e consideram somente as diárias. Taxas, seguros, caução e
              outros custos não fazem parte desta simulação.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
