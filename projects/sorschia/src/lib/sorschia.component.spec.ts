import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorschiaComponent } from './sorschia.component';

describe('SorschiaComponent', () => {
  let component: SorschiaComponent;
  let fixture: ComponentFixture<SorschiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorschiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorschiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
