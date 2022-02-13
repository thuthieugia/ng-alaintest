import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentLogComponent } from './log.component';

describe('StudentLogComponent', () => {
  let component: StudentLogComponent;
  let fixture: ComponentFixture<StudentLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
