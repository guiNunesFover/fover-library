import { TestBed } from '@angular/core/testing';
import { CoreModule } from 'src/app/modules/_core/core.module';
import { MenuTopComponent } from './menu-top.component';

describe(MenuTopComponent.name, () => 
{
  beforeEach(async () => 
  {
    await TestBed.configureTestingModule({
      imports: [
        CoreModule,
      ]
    }).compileComponents();
  });

  it(`${MenuTopComponent.name} - o componente deve ser criado.`, () => 
  {
    const fixture = TestBed.createComponent(MenuTopComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`${MenuTopComponent.name} - a variável 'title' deve ser igual à: 'Fover Componentes'.`, () => 
  {
    const fixture = TestBed.createComponent(MenuTopComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('Fover Componentes');
  });

  it(`${MenuTopComponent.name} - o título do menu deve ser renderizado.`, () => 
  {
    const fixture = TestBed.createComponent(MenuTopComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.menu-top-title')?.textContent).toContain(component.title);
  });
});
