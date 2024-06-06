import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardsComponent } from './user-cards.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserCardsComponent', () => {
  let component: UserCardsComponent;
  let fixture: ComponentFixture<UserCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardsComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
