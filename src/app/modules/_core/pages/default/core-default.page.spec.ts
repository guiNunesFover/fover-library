import { TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core.module';
import { CoreDefaultPage } from './core-default.page';

describe(CoreDefaultPage.name, () => 
{
  beforeEach(async () => 
  {
    await TestBed.configureTestingModule({
      imports: [
        CoreModule,
      ]
    }).compileComponents();
  });

  it('should create the app', () => 
  {
    const fixture = TestBed.createComponent(CoreDefaultPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`${CoreDefaultPage.name} - a variável 'title' deve ser igual à: 'Comece seus projetos 3 passos à frente.'.`, () => 
  {
    const fixture = TestBed.createComponent(CoreDefaultPage);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Comece seus projetos 3 passos à frente.');
  });

  it(`${CoreDefaultPage.name} - o título do menu deve ser renderizado.`, () => 
  {
    const fixture = TestBed.createComponent(CoreDefaultPage);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page-title')?.textContent).toContain(app.title);
  });
});
