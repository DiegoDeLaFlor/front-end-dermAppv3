import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoStartComponent } from './who-start.component';

describe('WhoStartComponent', () => {
  let component: WhoStartComponent;
  let fixture: ComponentFixture<WhoStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
