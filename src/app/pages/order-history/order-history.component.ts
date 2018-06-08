import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-order-history',
    templateUrl: './order-history.html',
    styleUrls: ['./order-history.scss']
})
export class OrderHistoryComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
