import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormPatientComponent } from './login-form-patient.component';

describe('LoginFormPatientComponent', () => {
  let component: LoginFormPatientComponent;
  let fixture: ComponentFixture<LoginFormPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
