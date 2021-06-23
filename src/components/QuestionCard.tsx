import '../styles/questionCard.scss';
import likeImg from '../images/like.svg'

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

export function QuestionCard(props: Question) {
  return (
    <div className="question-card-container">
      <p>{props.content}</p>
      <div className="user-info">
        <div className="left-content">
          <img src={props.author.avatar} alt={props.author.name} />
          <span>{props.author.name}</span>
        </div>
        <div className="right-content">
          <span>1</span>
          <img src={likeImg} alt="Like icon" />
        </div>
      </div>
    </div>
  )
}