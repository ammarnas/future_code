import { ComponentFixture, TestBed } from '@angular/core/testing';

import { filmListComponent } from './film-list.component';

describe('filmListComponent', () => {
  let component: filmListComponent;
  let fixture: ComponentFixture<filmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [filmListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(filmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
