import { DOCUMENT } from '@angular/common';
import { Directive, Inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Theme } from './symbols';
import { ThemeService } from './theme.service';

@Directive({
    selector: '[fover-theme]'
})
export class ThemeDirective implements OnInit 
{
    private unsubscribe = new Subject();
    
    constructor(
        @Inject(DOCUMENT) private document: Document,
        private _themeService: ThemeService)
    {}

    ngOnInit() 
    {
        const active = this._themeService.getActiveTheme();
        if (active) 
        {
            this.updateTheme(active);
        }
        
        this._themeService.themeChange.pipe(
            takeUntil(this.unsubscribe)
        ).subscribe((theme: Theme) => this.updateTheme(theme));
    }

    public updateTheme(theme: Theme) 
    {
        for (const key in theme.properties) 
        {
            this.document.body.style.setProperty(key, theme.properties[key]);
        }
    }
}
