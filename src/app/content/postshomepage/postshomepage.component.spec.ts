import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostshomepageComponent } from './postshomepage.component';

describe('PostshomepageComponent', () => {
  let component: PostshomepageComponent;
  let fixture: ComponentFixture<PostshomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostshomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostshomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
