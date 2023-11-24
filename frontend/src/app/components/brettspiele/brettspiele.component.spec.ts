import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrettspieleComponent } from './brettspiele.component';

describe('BrettspieleComponent', () => {
  let component: BrettspieleComponent;
  let fixture: ComponentFixture<BrettspieleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrettspieleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrettspieleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
