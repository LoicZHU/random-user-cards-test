import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardsListComponent } from './user-cards-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserCardsListComponent', () => {
  let component: UserCardsListComponent;
  let fixture: ComponentFixture<UserCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardsListComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
