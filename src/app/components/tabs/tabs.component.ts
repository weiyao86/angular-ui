import { Component, Output, EventEmitter, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
	selector: 's-tabs',
	templateUrl: './tabs.html',
	styleUrls: ['./tabs.scss'],
})
export class TabsComponent implements OnInit {

	@Output()
	tabItemClick: EventEmitter<string> = new EventEmitter<string>();

	@ContentChildren(TabItemComponent) tabItems: QueryList<TabItemComponent>;

	ngOnInit() {
	}

	ngAfterContentInit() {
		if (this.tabItems.length > 0) {

			// 默认选中第一个
			let tabs = this.tabItems.filter(item => item.active == true);
			
			if (tabs.length === 0) {
				this.tabItems.first.active = true;
			}
		}
	}

	selectTab(tab) {
		this.tabItems.forEach(tab => tab.active = false);

		tab.active = true;
		this.tabItemClick.emit(tab.title);
	}
}
