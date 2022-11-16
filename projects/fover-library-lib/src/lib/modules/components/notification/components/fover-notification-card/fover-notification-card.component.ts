import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FoverNotificationModel } from '../../model/fover-notification.model';

@Component({
    selector: 'fover-notification-card',
    templateUrl: './fover-notification-card.component.html',
    styleUrls: ['./fover-notification-card.component.scss'],
    animations: [
        trigger('fade', [
            state('hidden', style({ opacity: 0, 'margin-right': '-460px' })),
            state('visible', style({ opacity: 1, 'margin-right': '*' })),
            transition('hidden => visible', animate('0.3s ease-in')),
            transition('visible => hidden', animate('0.3s ease-out')),
            transition('void => visible', [
                style({ opacity: 0, 'margin-right': '-460px' }),
                animate('0.3s ease-in')
            ])
        ])
    ]
})

export class FoverNotificationCardComponent implements OnInit, OnDestroy
{
    @Input() item: FoverNotificationModel;
    @Input() durationSecond: number;
    @Output() close = new EventEmitter<FoverNotificationModel>();
    @ViewChild('card', { static: false }) card: ElementRef;
    @ViewChild('message', { static: false }) message: ElementRef;
    public currentTime: number = 0;
    public barLineStype: { width?: string } = { width: '0%' }; // Realiza o design da progress bar
    private stop: boolean;
    private subscription = new Subscription();

    ngOnInit(): void 
    {
        setTimeout(() => this.card.nativeElement.setAttribute('id',`card-notification`), 10);
        setTimeout(() => this.message.nativeElement.setAttribute('id',`card-notification-message`), 10);

        this.subscription.add(timer(0, 10)
        .pipe(
            tap(() => {
                if (!this.stop)
                {
                    this.currentTime++;
                    this.calcProgressBar();
                }
            }),
        ).subscribe(() =>
        {
            if (this.currentTime >= (this.durationSecond * 100))
            {
                this.closeCard();
            }
        }));
    }

    ngOnDestroy(): void 
    {
        this.subscription.unsubscribe();
    }

    private calcProgressBar(): void
    {
        this.barLineStype.width = `${(this.currentTime / (this.durationSecond * 100)) * 100}%`;
    }

    public closeCard(): void
    {
        this.item.stateVisible = 'hidden';
        setTimeout(() => 
        {
            this.close.emit(this.item);    
        }, 300);
    }

    public fadeStopCard(): void
    {
        this.stop = !this.stop;
    }
}
