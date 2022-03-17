import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsearchresultComponent } from './productsearchresult.component';

describe('ProductsearchresultComponent', () => {
  let component: ProductsearchresultComponent;
  let fixture: ComponentFixture<ProductsearchresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsearchresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsearchresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
