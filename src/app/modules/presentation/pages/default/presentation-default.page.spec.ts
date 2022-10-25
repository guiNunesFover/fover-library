import { TestBed } from '@angular/core/testing';
import { PresentationModule } from '../../presentation.module';
import { PresentationDefaultPage } from './presentation-default.page';

describe(PresentationDefaultPage.name, () => 
{
  beforeEach(async () => 
  {
    await TestBed.configureTestingModule({
      imports: [
        PresentationModule,
      ]
    }).compileComponents();
  });

  it('should create the app', () => 
  {
    const fixture = TestBed.createComponent(PresentationDefaultPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`${PresentationDefaultPage.name} - a variável 'title' deve ser igual à: 'Comece seus projetos 3 passos à frente.'.`, () => 
  {
    const fixture = TestBed.createComponent(PresentationDefaultPage);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Comece seus projetos 3 passos à frente.');
  });

  it(`${PresentationDefaultPage.name} - o título do menu deve ser renderizado.`, () => 
  {
    const fixture = TestBed.createComponent(PresentationDefaultPage);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page-title')?.textContent).toContain(app.title);
  });
});
