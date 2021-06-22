import { Button } from '../components/Button';
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import illustrationImg from '../images/illustration.svg';


export function NewRoom() {
  const { user } = useAuth();
  return (
    <div id="auth-page">
      <aside>
        <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
        <strong>Faça sua pergunta</strong>
        <p>Tire suas dúvidas em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <h2>Crie uma nova sala</h2>
          {/* <p>Crie uma nova sala</p> */}
          <form>
            <input
              type="text"
              placeholder="Código da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div >
  )
}