import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentModule } from '../../modules/component.module';
import { SectionModule } from '../../modules/section.module';

import { PurchaseHistoryComponent } from './purchase-history.component';
import { routing } from './purchase-history.routing';

@NgModule({
    imports: [
        ComponentModule,
        SectionModule,
        CommonModule,
        routing
    ],
    declarations: [
        PurchaseHistoryComponent
    ]
})
export class PurchaseHistoryModule {
}
