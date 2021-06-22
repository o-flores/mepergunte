import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';


export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }
  return (
    <main>
      <div>
        <button
          onClick={handleCreateRoom}
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