import { Component } from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  moduleId: module.id,
  selector: 'add-question',
  templateUrl: 'add-question.component.html'
})

export class AddQuestionComponent  {
  bodyVal = '';
  answerVal = '';
  sourceNameVal = '';
  sourceUrlVal = '';

  constructor(
    private questionService: QuestionService
  ){}

  onAdd(): void {
    this.questionService.addQuestion();
  }

}
