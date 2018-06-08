import { OnInit, Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { toBoolean } from '../../utils/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 's-pagination',
    templateUrl: './pagination.html',
    styleUrls: ['./pagination.scss']
})

export class PaginationComponent {

    icurrent: number = 1;
    ilastIndex: number = 1;
    ifirstIndex: number = 1;
    itotal: number = 0;
    ipageSize: number = 20;
    pages: object[];
    sizeOptions = [10, 20, 30, 40, 50];
    iShowSizeChanger=false;
    iShowTotal=false;
    iShowJumper=false;

    @Output() pageSizeChanger: EventEmitter<number> = new EventEmitter();
    @Output() pageIndexChange: EventEmitter<number> = new EventEmitter();
    @Output() pageIndexClickChange: EventEmitter<number> = new EventEmitter();

    @Input() jumpText = 'Goto';

    @Input()
    set pageIndex(value: number) {
        if (this.icurrent === value
            || value < this.ifirstIndex
            || value > this.ilastIndex
            || this.ilastIndex == 1) { return; }

        this.icurrent = Number(value);
        this.buildIndexes();
    }

    get pageIndex(): number {
        return this.icurrent;
    }

    @Input()
    set pageSize(value: number) {
        if (!value || value == this.ipageSize) {
            return;
        }
        if (this.sizeOptions.indexOf(value) === -1) {
            this.sizeOptions.push(value);
        }
        this.ipageSize = value;
        this.pageIndexChange.emit(this.pageIndex);
        this.buildIndexes();
    }

    get pageSize(): number {
        return this.ipageSize;
    }

    @Input()
    set total(value: number) {
        if (value == this.itotal) { return; }
        this.itotal = value;
        this.buildIndexes();
    }

    get total(): number {
        return this.itotal;
    }

    @Input()
    set nsShowSizeChanger(value:boolean){
        value = toBoolean(value);
        this.iShowSizeChanger=value;
    }

    get nsShowSizeChanger(){
        return this.iShowSizeChanger;
    }

    @Input()
    set nsShowTotal(value:boolean){
        value = toBoolean(value);
        this.iShowTotal=value;
    }

    get nsShowTotal(){
        return this.iShowTotal;
    }

    @Input()
    set nsShowJumper(value:boolean){
        value = toBoolean(value);
        this.iShowJumper=value;
    }

    get nsShowJumper(){
        return this.iShowJumper;
    }

    @Input()
    set nsPageSizeSelectorValues(value: number[]) {
        if (value) {
            this.sizeOptions = value;
        }
    }

    // 生成列表项
    buildIndexes(): void {
        this.ilastIndex = Math.ceil(this.itotal / this.ipageSize);
        if (this.ilastIndex && this.icurrent > this.ilastIndex) {
            this.icurrent = this.ilastIndex;
            this.pageIndexChange.emit(this.pageIndex);
        }

        const tempPages = [];
        if (this.ilastIndex <= 9) {
            for (let i = 2; i <= this.ilastIndex - 1; i++) {
                tempPages.push({ index: i });
            }
        } else {
            const current = this.icurrent;
            let left = Math.max(2, current - 2);
            let right = Math.min(current + 2, this.ilastIndex - 1);

            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.ilastIndex - current <= 2) {
                left = this.ilastIndex - 4;
            }
            for (let i = left; i <= right; i++) {
                tempPages.push({ index: i });
            }
        }
        this.pages = tempPages;
    }

    jumpPage(index: number): void {
        if (index === this.ifirstIndex - 1 || index === this.ilastIndex + 1 || index === this.pageIndex) {
            return;
        }
        if (index < this.ifirstIndex)
            this.pageIndex = this.ifirstIndex;
        else if (index > this.ilastIndex) {
            this.pageIndex = this.ilastIndex;
        } else {
            this.pageIndex = index;
        }
        this.pageIndexClickChange.emit(this.pageIndex);
        this.pageIndexChange.emit(this.pageIndex);
    }

    jumpBefore(size: number): void {
        this.jumpPage(this.icurrent - Math.round(size / 2));
    }

    jumpAfter(size: number): void {
        this.jumpPage(this.icurrent + Math.round(size / 2));
    }

    onPageIndexChange($event: number): void {
        this.pageIndex = $event;
        this.pageIndexChange.emit(this.pageIndex);
    }

    onPageSizeChanger($event: number) {
        this.pageSize = $event;
        this.pageSizeChanger.emit($event);
    }

    get roundPageSize(): number {
        return Math.round(this.ipageSize / 2);
    }

    get isFirstIndex(): boolean {
        return this.icurrent === this.ifirstIndex;
    }

    get isLastIndex(): boolean {
        return this.icurrent === this.ilastIndex;
    }

}
