import { Component, Input, forwardRef } from '@angular/core';
import {
    ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS,
    AbstractControl, ValidatorFn, ValidationErrors, FormControl
} from '@angular/forms';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterComponent),
    multi: true
};

export const validateCounterRange: ValidatorFn = (control: AbstractControl):
    ValidationErrors => {
    return (control.value > 10 || control.value < 0) ?
        { 'rangeError': { current: control.value, max: 10, min: 0 } } : null;
};

export const EXE_COUNTER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useValue: validateCounterRange,
    multi: true
};

@Component({
    selector: 'exe-counter',
    template: `
    <div>
      <p>当前值: {{ count }}</p>
      <button (click)="increment()"> + </button>
      <button (click)="decrement()"> - </button>
    </div>
    `,
    providers: [EXE_COUNTER_VALUE_ACCESSOR, EXE_COUNTER_VALIDATOR]
})
export class CounterComponent implements ControlValueAccessor {
    @Input() _count: number = 0;

    get count() {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
        this.propagateChange(this._count);
    }

    propagateChange = (_: any) => { };

    writeValue(value: any) {
        debugger;
        if (value) {
            this.count = value;
        }
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) { }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}
