import { useEffect } from "react";
import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { QuestionCard } from '../components/QuestionCard';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import '../styles/room.scss';

type RoomParams = {
  id: string;
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string,
    avatar: string,
  },
  content: string,
  isHighLighted: boolean,
  isAnswered: boolean,
}>;

type Question = {
  id: string,
  author: {
    name: string,
    avatar: string,
  },
  content: string,
  isHighLighted: boolean,
  isAnswered: boolean,
}

export function Room() {
  const [question, setQuestion] = useState('');
  const [questionsList, setQuestionsList] = useState<Question[]>([]);
  const [roomTitle, setRoomTitle] = useState('');
  const { user } = useAuth();
  

  const params = useParams<RoomParams>();
  const roomId = params.id;

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
      const questionsArray = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighLighted: value.isHighLighted,
          isAnswered: value.isAnswered,
        }
      });
      setQuestionsList(questionsArray);
      setRoomTitle(databaseRoom.title);
    })
  }, [roomId]);

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();

    if (question.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in')
    }

    const newQuestion = {
      content: question,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighLighted: false,
      isAnswered: false,
    }

    await database.ref(`rooms/${roomId}/questions`).push(newQuestion);
    setQuestion('');
  }

  return (
    <div id="room-page">
      <header>
        <p>LOGO</p>
        <div>
          <RoomCode code={roomId} />
        </div>
      </header>
      <main className="content">
        <div className="room-title">
          <h1>{roomTitle}</h1>
          {questionsList.length > 0 && <span>{`${questionsList.length} pergunta(s)`}</span>}
        </div>
        <form onSubmit={handleSendQuestion}>
          <textarea
            onChange={({ target }) => setQuestion(target.value)}
            placeholder="Pergunte"
            value={question}
          />
          <div className="form-footer">
            { user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>Para enviar sua pergunta,<button className="btn-login" > faça seu login.</button></span>
            ) }
            <Button disabled={!user} type="submit">Enviar sua pergunta</Button>
          </div>
        </form>
        { questionsList.map((question) => (
          <QuestionCard key={question.id} {...question} />
        )) }
      </main>
    </div>
  );
}