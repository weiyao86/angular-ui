import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-header-middle',
    templateUrl: './header-middle.component.html',
    styleUrls: ['./header-middle.component.scss']
})


export class HeaderMiddleComponent implements OnInit {
    isvisible: boolean = false;
    constructor() {

    }

    search(): void {

        alert("Search");
    }

    handleCancel(): void {
        this.isvisible = false;
    }

    handleOk(): void {
        this.isvisible = false;
    }



    ngOnInit() {
    }

}
