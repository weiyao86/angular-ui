import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 's-input-number',
	templateUrl: './input-number.component.html',
	styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

	@Input() size: string;

	@Input() isDisabled: boolean = false;

	@Input() min: number = 0;

	@Input() max: number = Number.MAX_SAFE_INTEGER;

	@Input() step: number = 1;

	@Input() model: any = '';

	@Output() modelChange: EventEmitter<number> = new EventEmitter<number>();

	minDisabled: boolean = false;
	maxDisabled: boolean = false;
	debounce: number = 300;

	changeHandle(value: number): void {
		const oldValue: number = this.model;
		this.model = value;
		if (Number.isNaN(+this.model)) {
			this.model = oldValue;
			return
		}
		this.maxDisabled = value > this.max;
		this.minDisabled = value < this.min;
		if (this.maxDisabled) return this.dispatchModel(this.max);
		if (this.minDisabled) return this.dispatchModel(this.min);
		this.modelChange.emit(value)
	}

	dispatchModel(limit: number): void {
		const timer = setTimeout(() => {
			this.model = limit;
			this.modelChange.emit(limit);
			clearTimeout(timer)
		}, this.debounce)
	}

	decreaseHandle(calcType: boolean = true): void {
		if (this.isDisabled) return;
		const step: number = calcType ? this.step : 0 - this.step;
		const val: number = Number(this.model) + step;
		if (Number.isNaN(val)) return;
		this.maxDisabled = val > this.max;
		this.minDisabled = val < this.min;
		if (!this.maxDisabled && !this.minDisabled) {
			this.model = val;
			this.modelChange.emit(this.model);
		}
	}

	ngOnInit() {
	}

}
