import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 's-tab-item',
  templateUrl: './tab-item.html',
  styleUrls: ['./tab-item.scss']
})
export class TabItemComponent implements OnInit {

  @Input() 
  title : string = "tab";

  @Input() 
  active : boolean = false;

  ngOnInit() {
  }

}