import { Component, Input,ContentChild,  OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ComboxComponent } from './combox.component';


@Component({
    selector:'s-option',
    encapsulation:ViewEncapsulation.None,
    template:`
    <ng-content></ng-content>
    `
})

export class ComboxOptionComponent implements OnInit, OnDestroy {
    ivalue: string;
    iname:string;
    @ContentChild("sOptionTemplate") sOptionTemplate;
    @Input()
    set sValue(val: string) {
        if (this.ivalue == val) return;
        this.ivalue = val;
    }

    get sValue(): string {
        return this.ivalue;
    }

    @Input()
    set sName(val: string) {
        if (this.iname == val) return;
        this.iname = val;
    }

    get sName(): string {
        return this.iname;
    }

    // @Input()
    // set disabled(val: boolean) {
    //     if (this.iname == val) return;
    //     this.iname = val;
    // }

    // get disabled(): string {
    //     return this.iname;
    // }

    constructor(private combox: ComboxComponent){

    }

    ngOnInit() {
        this.combox.addOption(this);
    }
    ngOnDestroy(): void {
        this.combox.removeOption(this);
    }
}
