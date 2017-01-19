import { Component } from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  moduleId: module.id,
  selector: 'add-question',
  templateUrl: 'add-question.component.html',
  styleUrls: [ 'add-question.component.css' ],
})

export class AddQuestionComponent  {
  bodyVal = '';
  answerVal = '';
  sourceNameVal = '';
  sourceUrlVal = '';

  constructor(
    private questionService: QuestionService
  ){}

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
    this.questionService.addQuestion(this.bodyVal,  this.answerVal, this.sourceNameVal, this.sourceUrlVal);
  }

}
