import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserCardsComponent } from './random-user-cards.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RandomUserCardsComponent', () => {
  let component: RandomUserCardsComponent;
  let fixture: ComponentFixture<RandomUserCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomUserCardsComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomUserCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
