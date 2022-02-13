import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { AvatarListModule } from '@delon/abc/avatar-list';
import { EllipsisModule } from '@delon/abc/ellipsis';
import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
import { TagSelectModule } from '@delon/abc/tag-select';
import { CurrencyPipeModule } from '@delon/util/pipes/currency';
import { SharedModule } from '@shared';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzStepsModule } from 'ng-zorro-antd/steps';

import { AddEditComponent } from './add-edit.component';
import { StudentLogComponent } from './log/log.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';

const COMPONENTS: Array<Type<void>> = [StudentLogComponent, StudentComponent, AddEditComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule,
    SharedModule,
    EllipsisModule,
    TagSelectModule,
    AvatarListModule,
    FooterToolbarModule,
    NzPaginationModule,
    NzStepsModule,
    CurrencyPipeModule,
    NzListModule
  ],
  declarations: COMPONENTS
})
export class StudentModule {}
