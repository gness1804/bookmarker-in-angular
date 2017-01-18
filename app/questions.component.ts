import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selectedQuestion: Question;

  constructor(
    private questionService: QuestionService,
    private router: Router,
  ){}

  getQuestions(): void {
    this.questionService.getQuestions().then(questions => this.questions = questions)
  }

  ngOnInit(): void {
    this.getQuestions();
  }

  onSelect(question: Question): void {
    this.selectedQuestion = question;
    this.router.navigate(['/detail', this.selectedQuestion.id]);
  }

}
