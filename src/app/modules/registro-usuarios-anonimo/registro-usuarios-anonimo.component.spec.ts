import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsuariosAnonimoComponent } from './registro-usuarios-anonimo.component';

describe('RegistroUsuariosAnonimoComponent', () => {
  let component: RegistroUsuariosAnonimoComponent;
  let fixture: ComponentFixture<RegistroUsuariosAnonimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUsuariosAnonimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUsuariosAnonimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
