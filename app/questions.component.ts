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

  bodyVal = '';
  answerVal = '';
  sourceNameVal = '';
  sourceUrlVal = '';

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

  onKeyBody(value: string): void {
    this.bodyVal = value;
  }

  onKeyAnswer(value: string): void {
    this.answerVal = value;
  }

  onKeySourceName(value: string): void {
    this.sourceNameVal = value;
  }

  onKeySourceUrl(value: string): void {
    this.sourceUrlVal = value;
  }

  onAdd(): void {
    this.questions.push({
      id: Date.now(),
      body: this.bodyVal,
      answer: this.answerVal,
      sourceName: this.sourceNameVal,
      sourceUrl: this.sourceUrlVal,
    })
  }

}
