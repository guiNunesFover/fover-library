import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[addTitle]'
})
export class AddTitleDirective implements AfterViewInit
{
    @Input() title?: string;

    constructor(private el: ElementRef) {}

    ngAfterViewInit(): void 
    {
        this.el.nativeElement.alt = this.el.nativeElement.title = this.title;
    }
}