import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
    selector: 'fover-modal',
    templateUrl: './fover-modal.component.html',
    styleUrls: ['./fover-modal.component.scss']
})
export class FoverModalComponent implements OnChanges, OnInit
{
    @Input() title: string = 'Add um título...';
    @Input() widthPixel: number = 500;
    @Output() close = new EventEmitter();
    public left: string;

    ngOnInit(): void 
    {
        this.calcSize();
    }

    ngOnChanges(): void 
    {
        this.calcSize();
    }

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler()
    {
        this.close.emit();
    }

    private calcSize(): void
    {
        this.left = `calc(50% - ${this.widthPixel / 2}px`;
        debugger
    }
}