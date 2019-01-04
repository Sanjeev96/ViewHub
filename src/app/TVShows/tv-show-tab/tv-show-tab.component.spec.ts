import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowTabComponent } from './tv-show-tab.component';

describe('TvShowTabComponent', () => {
  let component: TvShowTabComponent;
  let fixture: ComponentFixture<TvShowTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
