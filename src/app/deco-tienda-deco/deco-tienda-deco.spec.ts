import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoTiendaDeco } from './deco-tienda-deco';

describe('DecoTiendaDeco', () => {
  let component: DecoTiendaDeco;
  let fixture: ComponentFixture<DecoTiendaDeco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecoTiendaDeco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoTiendaDeco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
