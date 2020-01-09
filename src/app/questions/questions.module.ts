import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchListComponent } from './search-list/search-list.component';
import { QuestionsDetailComponent } from './questions-detail/questions-detail.component';
import { QuestionAnswersComponent } from './question-answers/question-answers.component';

@NgModule({
  declarations: [
    QuestionsListComponent,
    SearchBarComponent,
    SearchListComponent,
    QuestionsDetailComponent,
    QuestionAnswersComponent
  ],
  imports: [
    QuestionsRoutingModule,
    SharedModule
  ]
})
export class QuestionsModule { }
