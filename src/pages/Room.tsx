import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { RoomCode } from '../components/RoomCode';
import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function Room() {

  const params = useParams<RoomParams>();

  return (
    <div id="room-page">
      <header>
        <p>LOGO</p>
        <div>
          <RoomCode code={params.id} />
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>Nome da sala</h1>
          <span>3 perguntas</span>
        </div>
        <form>
          <textarea placeholder="Pergunte" />
          <div className="form-footer">
            <span>Para enviar sua pergunta, <button className="btn-login" > faça seu login.</button></span>
            <Button type="submit">Enviar sua pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}