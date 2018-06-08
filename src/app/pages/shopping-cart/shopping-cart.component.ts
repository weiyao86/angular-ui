import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.html',
    styleUrls: ['./shopping-cart.scss']
})
export class ShoppingCartComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
