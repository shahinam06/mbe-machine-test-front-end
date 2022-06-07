
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDescritionComponent } from './movie-description.component';

describe('DemoComponent', () => {
  let component: MovieDescritionComponent;
  let fixture: ComponentFixture<MovieDescritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDescritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDescritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
