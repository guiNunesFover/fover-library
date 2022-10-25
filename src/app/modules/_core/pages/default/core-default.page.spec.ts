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
});
