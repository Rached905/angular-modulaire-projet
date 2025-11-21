import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuggestions } from './list-suggestions';

describe('ListSuggestions', () => {
  let component: ListSuggestions;
  let fixture: ComponentFixture<ListSuggestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSuggestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSuggestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
