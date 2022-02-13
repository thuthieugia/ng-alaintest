import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEditComponent } from './add-edit.component';
import { StudentLogComponent } from './log/log.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'add', component: AddEditComponent },
  { path: 'edit/:id', component: AddEditComponent },
  { path: 'log', component: StudentLogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
