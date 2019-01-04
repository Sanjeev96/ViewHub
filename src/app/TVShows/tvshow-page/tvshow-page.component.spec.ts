import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TVShowPageComponent } from './tvshow-page.component';

describe('TVShowPageComponent', () => {
  let component: TVShowPageComponent;
  let fixture: ComponentFixture<TVShowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TVShowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
