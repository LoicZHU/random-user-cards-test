import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserCardsComponent } from './random-user-cards.component';

describe('RandomUserCardsComponent', () => {
  let component: RandomUserCardsComponent;
  let fixture: ComponentFixture<RandomUserCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomUserCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomUserCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
