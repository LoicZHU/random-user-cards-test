import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardItemComponent } from './user-card-item.component';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserCardItemComponent', () => {
  let component: UserCardItemComponent;
  let fixture: ComponentFixture<UserCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardItemComponent],
      imports: [HttpClientTestingModule],
      providers: [DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
