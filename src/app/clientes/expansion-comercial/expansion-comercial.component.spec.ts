import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionComercialComponent } from './expansion-comercial.component';

describe('ExpansionComercialComponent', () => {
  let component: ExpansionComercialComponent;
  let fixture: ComponentFixture<ExpansionComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionComercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
