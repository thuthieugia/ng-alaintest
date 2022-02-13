import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageService } from 'ng-zorro-antd/message';

import { Student } from './student';
import { StudentService } from './student.service';
@Component({
  selector: 'student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
  students!: Student[];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getAll().subscribe(students => (this.students = students));
  }

  delete(id: string) {
    const cloth = this.students.find(x => x.id === id);
    if (!cloth) return;
    cloth.isDeleting = true;
    this.studentService.delete(id).subscribe(() => (this.students = this.students.filter(x => x.id !== id)));
  }
}
