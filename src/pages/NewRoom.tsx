import { Button } from '../components/Button';

export function NewRoom() {
  return (
    <main>
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
      <p>Quer entrar em uma sala existente? <a href="#">Clique aqui</a></p>
    </main>
  )
}