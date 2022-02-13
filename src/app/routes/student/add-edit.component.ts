import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { StudentService } from './student.service';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    // const formOptions: AbstractControlOptions = { validators: MustMatch('password', 'confirmPassword') };
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      favoritemusic: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required]
    });

    if (!this.isAddMode) {
      this.studentService.getById(this.id).subscribe((x: any) => {
        this.form.patchValue(x);
      });
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.create();
    } else {
      this.update();
    }
  }

  private create() {
    this.studentService
      .create(this.form.value)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }

  private update() {
    this.studentService
      .update({ ...this.form.value }, this.id)
      .pipe(first())
      .subscribe(() => {
        this.router.navigate(['../../'], { relativeTo: this.route });
      })
      .add(() => (this.loading = false));
  }
}
