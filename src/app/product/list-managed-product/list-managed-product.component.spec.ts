import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManagedProductComponent } from './list-managed-product.component';

describe('ListManagedProductComponent', () => {
  let component: ListManagedProductComponent;
  let fixture: ComponentFixture<ListManagedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListManagedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManagedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
