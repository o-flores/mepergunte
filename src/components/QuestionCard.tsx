import '../styles/questionCard.scss';
import { ReactNode } from 'react';

type Question = {
  author: {
    name: string,
    avatar: string,
  },
  content: string,
  isHighLighted: boolean,
  isAnswered: boolean,
  children?: ReactNode,
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
          {props.children}
        </div>
      </div>
    </div>
  )
}