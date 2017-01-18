import { Injectable } from '@angular/core';
import { Question} from './question';
import { QUESTIONS} from './questions-data';

@Injectable()
export class QuestionService {
  getQuestion(): Promise<Question[]> {
    Promise.resolve(QUESTIONS)
  }

}
