import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorasComponent } from './constructoras.component';

describe('ConstructorasComponent', () => {
  let component: ConstructorasComponent;
  let fixture: ComponentFixture<ConstructorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructorasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
