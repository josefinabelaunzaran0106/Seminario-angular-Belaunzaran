import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoAbout } from './deco-about';

describe('DecoAbout', () => {
  let component: DecoAbout;
  let fixture: ComponentFixture<DecoAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecoAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
