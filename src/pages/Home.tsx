import { Button } from '../components/Button';

export function Home() {
  return (
    <main>
      <div>
        <button>Entre com o google</button>
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