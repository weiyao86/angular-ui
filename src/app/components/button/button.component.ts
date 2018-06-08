import { AfterContentInit, Component, HostListener, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 's-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})

export class ButtonComponent implements AfterContentInit {
  typeList = ['primary', 'dashed', 'danger'];
  sizeList = ['small', 'default', 'large'];
  prefixCls = 'a-btn-';
  clickedFlag = false;
  clickedCls = this.prefixCls + 'clicked';
  iType: any;
  iSize: any;
  cls: string;

  @Input()
  get type(): string {
    return this.iType;
  }

  set type(value: string) {
    if (this.typeList.indexOf(value) > -1)
      this.iType = this.prefixCls + (value || 'primary');
    else
      this.iType = '';
  }

  @Input()
  get size(): string {
    return this.iSize;
  }

  set size(value: string) {
    if (this.sizeList.indexOf(value) > -1)
      this.iSize = this.prefixCls + (value || 'default');
    else
      this.iSize = '';
  }

  @Output() onClickCallback = new EventEmitter<boolean>();

  constructor() {
  }

  @HostListener('click', ['$event']) _OnClick(e): void {
    var me = this;
    me.clickedFlag = true;
    me.setClassMap();
    setTimeout(() => {
      me.clickedFlag = false;
      me.setClassMap();
    }, 300);

    this.onClickCallback.emit(e);
  }

  setClassMap(): void {
    var me = this,
      clsArr = [me.type, me.size];

    me.clickedFlag && clsArr.push(me.clickedCls);
    me.cls = clsArr.join(' ');
  }

  ngAfterContentInit(): void {
    this.setClassMap();
  }
}
