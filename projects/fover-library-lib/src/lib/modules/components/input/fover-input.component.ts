import { AfterViewInit, Component, ContentChild, Input } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
    selector: 'fover-input',
    templateUrl: './fover-input.component.html',
    styleUrls: ['./fover-input.component.scss']
})
export class FoverInputComponent implements AfterViewInit
{
    @Input() height: 'xl' | 'l' | 'default' | 'small' | 'mini' = 'default';
    @Input() label: string;
    @Input() iconRight: string;
    @Input() errorMessage: string;
    @ContentChild(FormControlName) control: FormControlName;
    public input: FormControlName;
    
    ngAfterViewInit(): void 
    {
        this.input = this.control;
        
        if (this.input === undefined) throw new Error("Esse component precisa ser utilizado com o formControlName.");
    }

    public hasError(): boolean
    {
        if (this.input) return this.input.invalid! && (this.input.dirty! || this.input.touched!);

        return false;
    }
}