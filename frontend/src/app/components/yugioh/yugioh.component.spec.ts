import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YugiohComponent } from './yugioh.component';

describe('YugiohComponent', () => {
  let component: YugiohComponent;
  let fixture: ComponentFixture<YugiohComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YugiohComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YugiohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
