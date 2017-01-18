import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Question } from './question';
import { QuestionService } from './question.service';

@Component({
  moduleId: module.id,
  selector: 'questions',
  templateUrl: 'questions.component.html',
  styleUrls: [ 'questions.component.css' ],
})

export class QuestionsComponent implements OnInit  {
  questions: Question[];

  constructor(
    private questionService: QuestionService
  ){}

  getQuestions(): void {
    this.questionService.getQuestions().then(questions => this.questions = questions)
  }

  ngOnInit(): void {
    this.getQuestions();
  }

}
