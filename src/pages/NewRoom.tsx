import { Button } from '../components/Button';
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';


export function NewRoom() {
  const { user } = useAuth();
  return (
    <main>
      <h1>{user?.name}</h1>
      <h2>Crie uma nova sala</h2>
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
    </main>
  )
}