import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleshandbloodComponent } from './fleshandblood.component';

describe('FleshandbloodComponent', () => {
  let component: FleshandbloodComponent;
  let fixture: ComponentFixture<FleshandbloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleshandbloodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleshandbloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
