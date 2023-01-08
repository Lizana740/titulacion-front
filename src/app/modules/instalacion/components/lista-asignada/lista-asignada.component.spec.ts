import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAsignadaComponent } from './lista-asignada.component';

describe('ListaAsignadaComponent', () => {
  let component: ListaAsignadaComponent;
  let fixture: ComponentFixture<ListaAsignadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAsignadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAsignadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
