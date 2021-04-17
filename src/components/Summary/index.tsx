import { Container } from './styles';
import incommeImg from '../../assets/income.svg';
import outcommeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incommeImg} alt="Entradas"/>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcommeImg} alt="Saídas"/>
        </header>
        <strong> - R$10,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Entradas"/>
        </header>
        <strong>R$990,00</strong>
      </div>
    </Container>
  )
}