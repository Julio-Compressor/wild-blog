import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilouComponent } from './pilou.component';

describe('PilouComponent', () => {
  let component: PilouComponent;
  let fixture: ComponentFixture<PilouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PilouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
