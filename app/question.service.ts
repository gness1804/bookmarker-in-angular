import { Injectable } from '@angular/core';
import { Question } from './question';
import { QUESTIONS } from './questions-data';

@Injectable()
export class QuestionService {
  getQuestions(): Promise<Question[]> {
    return Promise.resolve(QUESTIONS)
  }

  getQuestion(id: number): Promise<Question>{
    return this.getQuestions().then(questions => questions.find(question => question.id === id))
  }

  addQuestion(): void {
    QUESTIONS.push({
      id: Date.now(),
      body: 'what is foo?',
      answer: 'foo is bar',
      sourceName: 'foo website',
      sourceUrl: 'foo.com',
    })
  }

}
