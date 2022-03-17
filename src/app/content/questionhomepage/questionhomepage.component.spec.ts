import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionhomepageComponent } from './questionhomepage.component';

describe('QuestionhomepageComponent', () => {
  let component: QuestionhomepageComponent;
  let fixture: ComponentFixture<QuestionhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
