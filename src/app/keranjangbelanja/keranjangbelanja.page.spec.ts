import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeranjangbelanjaPage } from './keranjangbelanja.page';

describe('KeranjangbelanjaPage', () => {
  let component: KeranjangbelanjaPage;
  let fixture: ComponentFixture<KeranjangbelanjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeranjangbelanjaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeranjangbelanjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
