import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosComercialesComponent } from './centros-comerciales.component';

describe('CentrosComercialesComponent', () => {
  let component: CentrosComercialesComponent;
  let fixture: ComponentFixture<CentrosComercialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrosComercialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentrosComercialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
