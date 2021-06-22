import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom'

export function Home() {
  const history = useHistory();

  function navigateToNewRoom() {
    history.push('/rooms/new')
  }
  return (
    <main>
      <div>
        <button
          onClick={navigateToNewRoom}
        >
          Entre com o google
        </button>
      </div>
      <div>Ou entre em uma sala</div>
      <form>
        <input
          type="text"
          placeholder="Digite o código da sala"
        />
        <Button type="submit">
          Entrar na sala!
        </Button>
      </form>
    </main>
  )
}