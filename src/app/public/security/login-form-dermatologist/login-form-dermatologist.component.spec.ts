import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormDermatologistComponent } from './login-form-dermatologist.component';

describe('LoginFormDermatologistComponent', () => {
  let component: LoginFormDermatologistComponent;
  let fixture: ComponentFixture<LoginFormDermatologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormDermatologistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormDermatologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
