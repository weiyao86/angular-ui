import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.html',
  styleUrls: ['./purchase-history.scss']
})
export class PurchaseHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
