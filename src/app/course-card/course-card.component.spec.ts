import { ComponentFixture, TestBed } from '@angular/core/testing';

import { filmCardComponent } from './film-card.component';

describe('filmCardComponent', () => {
  let component: filmCardComponent;
  let fixture: ComponentFixture<filmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [filmCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(filmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
